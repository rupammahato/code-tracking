import SpecificCategory from '../models/specific-category/SpecificCategory.js';

// Add bulk categories to a specific field (domain or mindset)
export const addBulkCategories = async (req, res) => {
  try {
    const { field, categories } = req.body;

    if (!['domain', 'mindset'].includes(field)) {
      return res.status(400).json({ success: false, message: 'Invalid field. Use "domain" or "mindset".' });
    }

    if (!Array.isArray(categories) || categories.length === 0) {
      return res.status(400).json({ success: false, message: 'Categories must be a non-empty array.' });
    }

    const updatedDocument = await SpecificCategory.findOneAndUpdate(
      {},
      { $push: { [field]: { $each: categories } } },
      { new: true, upsert: true }
    );

    if (!updatedDocument) {
      return res.status(404).json({ success: false, message: 'Document not found.' });
    }

    return res.status(200).json({ success: true, data: updatedDocument });
  } catch (error) {
    console.error('Error adding bulk categories:', error);
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Delete a category from a specific field (domain or mindset)
export const deleteCategory = async (req, res) => {
  try {
    const { field, categoryId } = req.body;

    if (!['domain', 'mindset'].includes(field)) {
      return res.status(400).json({ success: false, message: 'Invalid field. Use "domain" or "mindset".' });
    }

    if (!categoryId) {
      return res.status(400).json({ success: false, message: 'Category ID is required.' });
    }

    const updatedDocument = await SpecificCategory.findOneAndUpdate(
      {},
      { $pull: { [field]: { _id: categoryId } } },
      { new: true }
    );
... (truncated for brevity)