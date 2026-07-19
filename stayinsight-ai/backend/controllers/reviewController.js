const prisma = require("../prismaClient");

// GET all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await prisma.review.findMany({
  orderBy: {
    id: "desc",
  },
});
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET review by ID
const getReviewById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const review = await prisma.review.findUnique({
      where: { id },
    });

    if (!review) {
      return res.status(404).json({
        message: "Review not found",
      });
    }

    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE review
const createReview = async (req, res) => {
  try {
    const { guestName, rating, sentiment, review } = req.body;

    const newReview = await prisma.review.create({
      data: {
        guestName,
        rating,
        sentiment,
        review,
      },
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE review
const updateReview = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const updated = await prisma.review.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(404).json({
      message: "Review not found",
    });
  }
};

// DELETE review
const deleteReview = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.review.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    res.status(404).json({
      message: "Review not found",
    });
  }
};

// SEARCH reviews
const searchReviews = async (req, res) => {
  try {
    const q = req.query.q;

    const reviews = await prisma.review.findMany({
      where: {
        OR: [
          {
            guestName: {
              contains: q,
            },
          },
          {
            review: {
              contains: q,
            },
          },
        ],
      },
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
};