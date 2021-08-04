require('dotenv').config();

module.exports = {
  'minecraft': {
    'name': 'Minecraft',
    'status': 'Active',
    'ip': process.env.MINECRAFTIP,
  },
  'rust': {
    'name': 'Rust',
    'status': 'Inactive',
    'ip': process.env.RUSTIP,
  },
};
