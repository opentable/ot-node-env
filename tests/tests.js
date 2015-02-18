describe('node-env', function(){
    var helper = require("../index");
    var should = require("should");

    it('should preserve the NODE_ENV value if already set', function(){
      process.env.NODE_ENV = "foo";
      helper.env('./tests/node_env.json');
      process.env.NODE_ENV.should.equal("foo");
    });

    it('should set the value found in the file when NODE_ENV is not set', function(){
      process.env.NODE_ENV = "";
      helper.env('./tests/node_env.json');
      process.env.NODE_ENV.should.equal("production");
    });

    it('should use fallback when json file is missing', function(){
      process.env.NODE_ENV = "";
      helper.env('./tests/missing.json', 'default');
      process.env.NODE_ENV.should.equal('default');
    });

    it('should use fallback when json file is malformed', function(){
      process.env.NODE_ENV = "";
      helper.env('./tests/malformed.json', 'default');
      process.env.NODE_ENV.should.equal('default');
    });

    it('should set undefined when nothing is available and fallback is not specified', function(){
      process.env.NODE_ENV = "";
      helper.env('./tests/missing.json');
      process.env.NODE_ENV.should.eql("");
    });
});
