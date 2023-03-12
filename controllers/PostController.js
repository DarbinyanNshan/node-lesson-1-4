const axios = require('axios');
const { API_URL } = require('../constants');

exports.getPosts = async (req, res )  =>{
    try{
        const posts = await axios.get(`${API_URL}/posts`)

        res.status(200).json({
            success: true,
            status: 200,
            data: posts.data
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Somthing went strong',
            data: null
        })
    }

}

exports.getPostsUser = async (req, res) =>{
    const { userId } = req.params;
    try{
        const posts = await axios.get(`${API_URL}/posts/${userId}`)

        res.status(200).json({
            success: true,
            status: 200,
            data: posts.data
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Somthing went strong',
            data: null
        })
    }
}