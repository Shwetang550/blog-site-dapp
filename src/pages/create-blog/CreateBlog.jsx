import React, { useEffect, useState } from 'react';

// react-router-dom
import { useHistory } from 'react-router-dom';

// blockchain
import Web3 from 'web3';
import ABI from '../../abis/Blog.json';

// styles or 3rd party components
import './CreateBlog.css';
import { Button, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

// custom components
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const CreateBlog = () => {
    const [blog, setBlog] = useState();
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const history = useHistory();

    const handleSubmit = async () => { 
        const resp = await blog.methods.createBlog(name, imageUrl, title, body).send({from: name, gas: 3000000})
            .once('receipt', (receipt) => console.log('success'));

        setName('');
        setImageUrl('');
        setTitle('');
        setBody('');
        
        toast.success("Blog Created Successfully!!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        
        const blogCounter = await blog.methods.blogNumber().call();

        setTimeout(() => history.push(`/blog/${blogCounter}`), 7000);
    };

    useEffect(() => { 
        const fetchData = async () => { 
            const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

            const address = await web3.eth.getAccounts();
            setName(address[1]);

            const blog = new web3.eth.Contract(ABI.abi, ABI.networks[5777].address);
            setBlog(blog);

        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />

            <ToastContainer />

            <div className='createBlog'>

                <h1>Create a Blog</h1>

                <TextField
                    label="Name"
                    variant="outlined"
                    value={name}
                />
                
                <TextField
                    label="Image URL"
                    variant="outlined"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                />
                
                <TextField
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                
                <TextField
                    label="Body"
                    variant="outlined"
                    rows={10}
                    multiline
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                
                <Button variant='contained' onClick={handleSubmit}>Create Blog</Button>
            
            </div>

            
            <Footer />
        </>
    )
}

export default CreateBlog
