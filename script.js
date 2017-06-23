var snmp = require ("net-snmp");

var session;// = snmp.createSession ("10.10.10.73", "netstat");

var oids = []; //["1.3.6.1.4.1.2011.5.25.42.3.1.1.1.1.2.385"];
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
