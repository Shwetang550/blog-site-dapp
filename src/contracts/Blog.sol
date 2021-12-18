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
        titleToData[blogNumber] = BlogData(blogNumber, 'Shwetang', 'https://media.istockphoto.com/photos/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-at-picture-id1221101939?b=1&k=20&m=1221101939&s=170667a&w=0&h=2m-uIV5HQdCuIocqZlxWMij9jyfcf7BNNr7egiGPIDM=' , 'How to handle shipping and delivery during a world-wide pandemic', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).');
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