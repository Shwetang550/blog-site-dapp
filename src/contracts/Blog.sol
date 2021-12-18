pragma solidity >=0.5.0;

contract Blog {
    uint256 public blogNumber;

    struct BlogData {
        uint256 id;
        string authorName;
        string imageUrl;
        string title;
        string body;
    }

    mapping(uint256 => BlogData) public titleToData;

    constructor() public {
        blogNumber++;
        titleToData[blogNumber] = BlogData(blogNumber, 'Test101', 'https://media.istockphoto.com/photos/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-at-picture-id1221101939?b=1&k=20&m=1221101939&s=170667a&w=0&h=2m-uIV5HQdCuIocqZlxWMij9jyfcf7BNNr7egiGPIDM=' , 'Title #1', 'This is body para...');
    }

    function createBlog(
        string memory _authorName, 
        string memory _imageUrl, 
        string memory _title, 
        string memory _body
        ) 
        public {

        blogNumber++;
        titleToData[blogNumber] = BlogData(blogNumber, _authorName, _imageUrl, _title, _body);
    }
}