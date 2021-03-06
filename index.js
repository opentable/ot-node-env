module.exports.env = function(file, fallback){
  var targetfile = file || '/etc/node_env.json';

  var filecontents;

  try {
    filecontents = require(targetfile);
  }
  catch (err){
    filecontents = {};
  }

  process.env.NODE_ENV = process.env.NODE_ENV || filecontents.env || fallback || "";
};
