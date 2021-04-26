const { query } = require('express');
const catchAsync = require('./../utils/catchAsync');
const Item = require('./../models/itemModel')


///CREATE ITEM
exports.createItem = catchAsync(async (req, res, next) => {
    const newItem = await Item.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: {
        item: newItem,
      },
    });
  });

  ///GET ITEMS

  exports.getItems = catchAsync(async (req, res, next) => {
    const items = await Item.find()
      res.status(200).json({
          items
      });
    });