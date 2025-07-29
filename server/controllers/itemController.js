const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const { title, description, type, location, contactInfo } = req.body;
    const newItem = new Item({
      title,
      description,
      type,
      location,
      contactInfo,
      createdBy: req.userId,
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save item' });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find()
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};
