const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
  },
  expired: {
    type: Boolean,
    required: true,
    default: false,
  },

  // ยังขาดตัวที่ไว้บอกวันที่ ที่ถูก insert
  // เราจะใช้ cronjob มาเช็คว่าจะให้มันหมดอายุเป็น true ทุกกี่ชั่วโมง หรืออีกวิธีคือการทำ tricker
});

module.exports = mongoose.model("url", urlSchema);
