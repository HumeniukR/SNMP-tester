var snmp = require ("net-snmp");

var session;// = snmp.createSession ("127.0.0.1", "public");

var oids = []; //["1.3.6.1.2.1.1.1.0"];
var result = "";
var  getOutput = function(ip, community, _oid) {
        session = snmp.createSession (ip, community);
        oids.push(_oid);
        session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++)
            if (snmp.isVarbindError (varbinds[i]))
                console.error (snmp.varbindError (varbinds[i]))
            else
                //console.log (varbinds[i].oid + " = " + varbinds[i].value);
            result = result + varbinds[i].oid + " = " + varbinds[i].value + "|";
    }
});
            return result;
} 

module.exports.getOutput = getOutput;
