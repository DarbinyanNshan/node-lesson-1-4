const axios = require('axios');
const { API_URL } = require('../constants');

exports.getComments = async (req, res) => {
    try{
        const comments = await axios.get(`${API_URL}/comments`)
        
       res.status(200).json({
            success: true,
            status: 200,
            data: comments.data
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Somthing went strong',
            data: null
        })
    }
}

exports.getCommentsId = async (req, res ) => {
    const { postId } = req.params
    try{
      const comments = await axios.get(`${API_URL}/comments/${postId}`)
        
       res.status(200).json({
            success: true,
            status: 200,
            data: comments.data
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Somthing went strong',
            data: null
        })
    }
}