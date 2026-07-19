const { analyzeReview } = require("../services/openrouterService");


const analyze = async (req, res) => {

    try {

        const { review } = req.body;


        if (!review) {
            return res.status(400).json({
                message:"Review is required"
            });
        }


        const result = await analyzeReview(review);


        res.json({
            success:true,
            result
        });


    } catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:"AI analysis failed"
        });

    }

};


module.exports = {
    analyze
};