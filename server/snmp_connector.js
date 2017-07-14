var snmp = require ("net-snmp");
var version = snmp.Version2c;
//var oid = "1.3.6.1.2.1.2.2";
var tree;

function getAgentAnswer (ip, community, oid) {
  tree = {};//new Array;
  walk(ip, community, oid);
  console.log(tree[5000])
  return tree;
}

function walk(ip, community, oid) {
  var session = snmp.createSession (ip, community, {version: version});

  function doneCb (error) {
    if (error)
      console.error (error.toString ());
  }

  function feedCb (varbinds) {
    for (var i = 0; i < varbinds.length; i++) {
      if (snmp.isVarbindError (varbinds[i]))
        console.error (snmp.varbindError (varbinds[i]));
      else
       //console.log (varbinds[i].oid + "|" + varbinds[i].value);
      //tree = tree + '[' +  varbinds[i].oid + '] ' + varbinds[i].value + '\n';
      //tree.push('[' +  varbinds[i].oid + '] ' + varbinds[i].value);
        var a = 'a' + i;
      tree.a = varbinds[i].oid + ' | ' + varbinds[i].value;
    }
  }

  var maxRepetitions = 20;

// The maxRepetitions argument is optional, and will be ignored unless using
// SNMP verison 2c
  session.walk (oid, maxRepetitions, feedCb, doneCb);
}
module.exports.getAgentAnswer = getAgentAnswer;
module.exports.tree = tree;
