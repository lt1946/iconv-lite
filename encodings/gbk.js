var gbkTable = require(__dirname + '/table/gbk.js');
module.exports = {
	'windows936': 'gbk',
	'gb2312': 'gbk',
	'gbk': {
		type: 'table',
		table: gbkTable
	}
}
