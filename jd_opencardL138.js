/*
5.1-5.31 安佳 邀新有礼


1.开1张卡
2.已开卡的不算有效人数

活动规则：
邀请1人积分，邀请3人40豆子，邀请50人60豆子

最多可以获取10次机会，最大化收入：50*10

领取一次算一次机会，并扣除邀请人数，所以就不限制多少自动停脚本了。

脚本显示有点问题，实际以活动页面为准

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

————————————————
入口：[ 5.1-5.31 安佳 邀新有礼 ]

请求太频繁会被黑ip
过10分钟再执行

cron:11 10 10-31 5 *
============Quantumultx===============
[task_local]
#5.1-5.31 安佳 邀新有礼
11 10 10-31 5 * jd_opencardL138.js, tag=5.1-5.31 安佳 邀新有礼, enabled=true

*/

const $ = new Env('5.1-5.31 安佳 邀新有礼');

var _0xodN = 'jsjiami.com.v6', _0xodN_ = ['_0xodN'],
    _0x5dca = [_0xodN, '\x69\x73\x4e\x6f\x64\x65', '\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73', '\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x6b\x65\x79\x73', '\x66\x6f\x72\x45\x61\x63\x68', '\x70\x75\x73\x68', '\x65\x6e\x76', '\x4a\x44\x5f\x44\x45\x42\x55\x47', '\x66\x61\x6c\x73\x65', '\x6c\x6f\x67', '\x67\x65\x74\x64\x61\x74\x61', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32', '\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44', '\x6d\x61\x70', '\x63\x6f\x6f\x6b\x69\x65', '\x66\x69\x6c\x74\x65\x72', '\x68\x6f\x74\x46\x6c\x61\x67', '\x6f\x75\x74\x46\x6c\x61\x67', '\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6e\x64', '\x6d\x73\x67', '\x6e\x61\x6d\x65', '\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x61\x73\x73\x69\x73\x74\x53\x74\x61\x74\x75\x73', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x32\x31\x30\x34\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x31\x33', '\x73\x68\x61\x72\x65\x55\x75\x69\x64', '\x38\x61\x61\x36\x61\x37\x32\x33\x34\x33\x35\x62\x34\x36\x65\x39\x38\x63\x30\x62\x37\x36\x32\x36\x39\x62\x33\x31\x64\x63\x62\x32', '\u5165\u53e3\x3a\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x26\x49\x6e\x76\x69\x74\x65\x55\x75\x69\x64\x3d', '\x65\x65\x30\x30\x63\x66\x62\x38\x30\x36\x62\x66\x34\x64\x31\x36\x39\x34\x64\x64\x32\x34\x63\x30\x39\x35\x37\x66\x66\x61\x64\x37', '\x66\x6c\x6f\x6f\x72', '\x72\x61\x6e\x64\x6f\x6d', '\x6c\x65\x6e\x67\x74\x68', '\x55\x73\x65\x72\x4e\x61\x6d\x65', '\x6d\x61\x74\x63\x68', '\x69\x6e\x64\x65\x78', '\x62\x65\x61\x6e', '\x6e\x69\x63\x6b\x4e\x61\x6d\x65', '\x0a\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7', '\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a', '\x77\x61\x69\x74', '\x61\x63\x74\x6f\x72\x55\x75\x69\x64', '\x68\x61\x73\x45\x6e\x64', '\u6b64\x69\x70\u5df2\u88ab\u9650\u5236\uff0c\u8bf7\u8fc7\x31\x30\u5206\u949f\u540e\u518d\u6267\u884c\u811a\u672c', '\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x63\x61\x74\x63\x68', '\x6c\x6f\x67\x45\x72\x72', '\x66\x69\x6e\x61\x6c\x6c\x79', '\x64\x6f\x6e\x65', '\x61\x73\x73\x69\x73\x74\x43\x6f\x75\x6e\x74', '\x65\x6e\x64\x54\x69\x6d\x65', '\x54\x6f\x6b\x65\x6e', '\x50\x69\x6e', '\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\u83b7\u53d6\x5b\x74\x6f\x6b\x65\x6e\x5d\u5931\u8d25\uff01', '\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\u5931\u8d25', '\u6d3b\u52a8\u7ed3\u675f', '\u6b64\x69\x70\u5df2\u88ab\u9650\u5236\uff0c\u8bf7\u8fc7\x31\x30\u5206\u949f\u540e\u518d\u6267\u884c\u811a\u672c\x0a', '\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f', '\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f\x56\x4f', '\x67\x65\x74\x4d\x79\x50\x69\x6e\x67', '\u83b7\u53d6\x5b\x50\x69\x6e\x5d\u5931\u8d25\uff01', '\x61\x63\x63\x65\x73\x73\x4c\x6f\x67\x57\x69\x74\x68\x41\x44', '\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6f\x6e\x74\x65\x6e\x74', '\u83b7\u53d6\u4e0d\u5230\x5b\x61\x63\x74\x6f\x72\x55\x75\x69\x64\x5d\u9000\u51fa\u6267\u884c\uff0c\u8bf7\u91cd\u65b0\u6267\u884c', '\x70\x72\x69\x7a\x65\x49\x74\x65\x6d', '\x6a\x6f\x69\x6e\x56\x65\x6e\x64\x65\x72\x49\x64', '\x76\x65\x6e\x64\x65\x72\x49\x64', '\x65\x72\x72\x6f\x72\x4a\x6f\x69\x6e\x53\x68\x6f\x70', '\x69\x6e\x64\x65\x78\x4f\x66', '\u6d3b\u52a8\u592a\u706b\u7206\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5', '\u7b2c\x31\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u7b2c\x32\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u7b2c\x33\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u5f00\u5361\u5931\u8d25\u274c\x20\uff0c\u91cd\u65b0\u6267\u884c\u811a\u672c', '\u3010\u8d26\u53f7', '\u3011\u5f00\u5361\u5931\u8d25\u274c\x20\uff0c\u91cd\u65b0\u6267\u884c\u811a\u672c\x0a', '\x68\x65\x6c\x70\x53\x74\x61\x74\x75\x73', '\u52a9\u529b\u6210\u529f', '\u672a\u52a9\u529b', '\u5df2\u5f00\u5361\x20\u65e0\u6cd5\u52a9\u529b', '\u672a\u77e5\x2d', '\x68\x65\x6c\x70\x43\x6f\x75\x6e\x74', '\u3011\u53ef\u9886\u53d6\u5956\u54c1\x0a\u7b2c\u4e00\u6863\u5956\u54c1\u53ef\u9886\u53d6\uff1a', '\x66\x6c\x61\x67\x31', '\x20\u6b21\x0a\u7b2c\u4e8c\u6863\u5956\u54c1\u53ef\u9886\u53d6\uff1a', '\x66\x6c\x61\x67\x32', '\x20\u6b21\x0a\u7b2c\u4e09\u6863\u5956\u54c1\u53ef\u9886\u53d6\uff1a', '\x66\x6c\x61\x67\x33', '\x20\u6b21\x0a\u8870\u4ed4\uff0c\u8bf7\u524d\u5f80\u6d3b\u52a8\u9875\u9762\u9886\u53d6\uff0c\u5148\u5230\u5148\u5f97\u3002', '\u3011\u52a9\u529b\u4eba\u6570\uff1a', '\x20\u3010\u8d26\u53f7\x31\u3011\u52a9\u529b\u4eba\u6570\uff1a', '\u5f53\u524d\u52a9\u529b\x3a', '\u540e\u9762\u7684\u53f7\u90fd\u4f1a\u52a9\u529b\x3a', '\u4f11\u606f\u4e00\u4e0b\uff0c\u522b\u88ab\u9ed1\x69\x70\u4e86\x0a\u53ef\u6301\u7eed\u53d1\u5c55', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d', '\x50\x4f\x53\x54', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x75\x72\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x75\x75\x69\x64\x3d\x39\x61\x37\x39\x31\x33\x33\x38\x35\x35\x65\x34\x65\x64\x34\x32\x65\x38\x33\x63\x64\x61\x36\x63\x35\x38\x62\x35\x31\x38\x38\x31\x63\x34\x35\x31\x39\x32\x33\x36\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x70\x70\x6c\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x30\x2e\x31\x2e\x34\x26\x73\x74\x3d\x31\x36\x34\x37\x32\x36\x33\x31\x34\x38\x32\x30\x33\x26\x73\x76\x3d\x31\x30\x32\x26\x73\x69\x67\x6e\x3d\x35\x33\x65\x65\x30\x32\x61\x35\x39\x64\x65\x63\x65\x33\x63\x34\x38\x30\x65\x33\x66\x63\x62\x30\x36\x37\x63\x34\x39\x39\x35\x34', '\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x4d\x79\x50\x69\x6e\x67', '\x74\x6f\x6b\x65\x6e\x3d', '\x26\x66\x72\x6f\x6d\x54\x79\x70\x65\x3d\x41\x50\x50\x26\x75\x73\x65\x72\x49\x64\x3d\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x26\x26\x70\x69\x6e\x3d', '\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x61\x63\x63\x65\x73\x73\x4c\x6f\x67', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x76\x65\x6e\x64\x65\x72\x49\x64\x3d\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x26\x26\x63\x6f\x64\x65\x3d\x32\x35\x26\x70\x69\x6e\x3d', '\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x26\x70\x61\x67\x65\x55\x72\x6c\x3d', '\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66\x6f', '\x2f\x77\x78\x41\x63\x74\x69\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66\x6f', '\x70\x69\x6e\x3d', '\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x2f\x75\x70\x64\x61\x74\x65\x49\x6e\x76\x69\x74\x65\x49\x64', '\x26\x70\x69\x6e\x3d', '\x2f\x77\x78\x41\x63\x74\x69\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f\x56\x4f', '\x75\x73\x65\x72\x49\x64\x3d\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36', '\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x2f\x70\x72\x69\x7a\x65\x49\x74\x65\x6d', '\x26\x61\x63\x74\x6f\x72\x55\x75\x69\x64\x3d', '\x70\x6f\x73\x74', '\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65', '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64', '\x74\x6f\x53\x74\x72', '\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5', '\x64\x72\x61\x77\x43\x6f\x6e\x74\x65\x6e\x74', '\x70\x61\x72\x73\x65', '\x20\u6267\u884c\u4efb\u52a1\u5f02\u5e38', '\x72\x75\x6e\x46\x61\x6c\x61\x67', '\x6f\x62\x6a\x65\x63\x74', '\x65\x72\x72\x63\x6f\x64\x65', '\x74\x6f\x6b\x65\x6e', '\x6d\x65\x73\x73\x61\x67\x65', '\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72\x20', '\x72\x65\x73\x75\x6c\x74', '\x64\x61\x74\x61', '\x73\x65\x63\x72\x65\x74\x50\x69\x6e', '\x6e\x69\x63\x6b\x6e\x61\x6d\x65', '\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65', '\x73\x69\x64', '\x73\x68\x6f\x70\x49\x64', '\x75\x73\x65\x72\x49\x64', '\x65\x6e\x74\x65\x72\x53\x74\x61\x74\x75\x73', '\x6f\x70\x65\x6e\x53\x74\x61\x74\x75\x73', '\x69\x6e\x76\x69\x74\x65\x64\x4e\x75\x6d\x62\x65\x72', '\x73\x65\x6e\x64\x42\x65\x61\x6e\x4e\x75\x6d', '\u3011\u83b7\u5f97', '\x67\x65\x74\x4f\x70\x65\x6e\x43\x61\x72\x64\x53\x74\x61\x74\x75\x73\x57\x69\x74\x68\x4f\x75\x74\x53\x65\x6c\x66', '\x69\x73\x4f\x6b', '\x61\x6c\x6c\x4f\x70\x65\x6e\x43\x61\x72\x64', '\x6f\x70\x65\x6e\x43\x61\x72\x64', '\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x48\x61\x73\x43\x6f\x75\x70\x6f\x6e', '\u6211\u7684\u5956\u54c1\uff1a', '\u88ab\u9080\u8bf7', '\u901b\u5e97\u94fa', '\x64\x72\x61\x77\x49\x64', '\x64\x61\x79\x53\x68\x61\x72\x65\x42\x65\x61\x6e\x73', '\x69\x6e\x66\x6f\x4e\x61\x6d\x65', '\x72\x65\x70\x6c\x61\x63\x65', '\x69\x6e\x66\x6f\x54\x79\x70\x65', '\x76\x61\x6c\x75\x65', '\u9080\u8bf7\u597d\u53cb\x28', '\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6f\x72\x64', '\x53\x68\x61\x72\x65\x43\x6f\x75\x6e\x74', '\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x20\u4f60\u9080\u8bf7\u4e86\x3a', '\x2d\x3e\x20', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e', '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72', '\x7a\x68\x2d\x63\x6e', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64', '\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74', '\x52\x65\x66\x65\x72\x65\x72', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d\x32\x32\x30\x33\x31\x30\x30\x30\x30\x30\x31\x37\x38\x32\x30\x32\x2f\x3f\x68\x65\x6c\x70\x55\x75\x69\x64\x3d', '\x43\x6f\x6f\x6b\x69\x65', '\x41\x55\x54\x48\x5f\x43\x5f\x55\x53\x45\x52\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d\x32\x31\x30\x34\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x31\x33\x26\x49\x6e\x76\x69\x74\x65\x55\x75\x69\x64\x3d', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a', '\x67\x65\x74', '\x20\x63\x6f\x6f\x6b\x69\x65\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5', '\u6d3b\u52a8\u5df2\u7ed3\u675f', '\x68\x65\x61\x64\x65\x72\x73', '\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65', '\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65', '\x73\x70\x6c\x69\x74', '\x74\x72\x69\x6d', '\x4c\x5a\x5f\x54\x4f\x4b\x45\x4e\x5f\x4b\x45\x59\x3d', '\x4c\x5a\x5f\x54\x4f\x4b\x45\x4e\x5f\x56\x41\x4c\x55\x45\x3d', '\x6c\x7a\x5f\x6a\x64\x70\x69\x6e\x5f\x74\x6f\x6b\x65\x6e\x3d', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x31\x2e\x34\x3b\x31\x33\x2e\x31\x2e\x32\x3b', '\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x38\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x31\x34\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x31\x5f\x32\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39', '\x63\x68\x61\x72\x41\x74', '\x73\x68\x6f\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x2c\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3a', '\x7b\x22\x76\x65\x6e\x64\x65\x72\x49\x64\x22\x3a\x22', '\x22\x2c\x22\x73\x68\x6f\x70\x49\x64\x22\x3a\x22', '\x22\x2c\x22\x62\x69\x6e\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6f\x64\x65\x46\x6c\x61\x67\x22\x3a\x31\x2c\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6e\x64\x22\x3a\x7b\x7d\x2c\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6c\x64\x46\x6c\x61\x67\x22\x3a\x30', '\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x34\x30\x36\x7d', '\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x34\x31\x31\x35\x37\x25\x33\x42\x31\x39\x37\x65\x65\x36\x39\x37\x64\x35\x30\x63\x61\x33\x31\x36\x66\x33\x35\x38\x32\x34\x38\x38\x63\x37\x66\x61\x39\x64\x33\x34\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x64\x39\x34\x35\x31\x64\x65\x62\x31\x38\x6e\x31\x50\x33\x31\x4a\x75\x6e\x53\x47\x54\x66\x5a\x68\x6d\x65\x62\x75\x69\x76\x77\x73\x45\x77\x59\x57\x55\x51\x46\x31\x5a\x6b\x70\x64\x74\x75\x53\x6d\x4b\x4f\x45\x53\x35\x44\x6e\x49\x4d\x46\x64\x79\x4f\x76\x4b\x69\x6b\x64\x67\x75\x65\x6c\x49\x69\x42\x55\x6e\x4a\x62\x65\x43\x67\x6f\x4e\x6c\x63\x45\x76\x76\x25\x33\x42\x36\x65\x30\x39\x30\x63\x62\x64\x65\x33\x33\x37\x35\x39\x30\x62\x35\x31\x61\x35\x31\x34\x37\x31\x38\x66\x65\x65\x33\x39\x31\x64\x34\x36\x66\x65\x63\x65\x36\x62\x39\x35\x33\x65\x64\x31\x30\x38\x34\x61\x30\x35\x32\x66\x36\x64\x37\x36\x66\x66\x62\x64\x39\x32\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x32\x30\x31\x31\x35\x37', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x62\x69\x6e\x64\x57\x69\x74\x68\x56\x65\x6e\x64\x65\x72\x26\x62\x6f\x64\x79\x3d', '\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3d', '\x2a\x2f\x2a', '\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x68\x6f\x70\x6d\x65\x6d\x62\x65\x72\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x74\x6f\x4f\x62\x6a', '\x73\x75\x63\x63\x65\x73\x73', '\x67\x69\x66\x74\x49\x6e\x66\x6f', '\x67\x69\x66\x74\x4c\x69\x73\x74', '\u5165\u4f1a\u83b7\u5f97\x3a', '\x64\x69\x73\x63\x6f\x75\x6e\x74\x53\x74\x72\x69\x6e\x67', '\x70\x72\x69\x7a\x65\x4e\x61\x6d\x65', '\x73\x65\x63\x6f\x6e\x64\x4c\x69\x6e\x65\x44\x65\x73\x63', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x65\x74\x53\x68\x6f\x70\x4f\x70\x65\x6e\x43\x61\x72\x64\x49\x6e\x66\x6f\x26\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x76\x65\x6e\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32', '\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6e\x6e\x65\x6c\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38', '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x43\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\u4f1a\u5458\u5361\u540d\u79f0\uff1a', '\x73\x68\x6f\x70\x4d\x65\x6d\x62\x65\x72\x43\x61\x72\x64\x49\x6e\x66\x6f', '\x76\x65\x6e\x64\x65\x72\x43\x61\x72\x64\x4e\x61\x6d\x65', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6c\x65\x4c\x69\x73\x74', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x49\x6e\x66\x6f', '\x6f\x70\x65\x6e\x43\x61\x72\x64\x53\x74\x61\x74\x75\x73', '\x75\x73\x65\x72\x49\x6e\x66\x6f', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x6f\x70\x65\x6e\x43\x61\x72\x64\x42\x65\x61\x6e', '\x73\x74\x72\x69\x6e\x67', '\u8bf7\u52ff\u968f\u610f\u5728\x42\x6f\x78\x4a\x73\u8f93\u5165\u6846\u4fee\u6539\u5185\u5bb9\x0a\u5efa\u8bae\u901a\u8fc7\u811a\u672c\u53bb\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65', '\x6e\x41\x7a\x6a\x70\x73\x53\x4a\x4d\x7a\x6a\x69\x75\x49\x67\x61\x4b\x75\x6d\x69\x2e\x63\x6f\x77\x6d\x2e\x76\x36\x3d\x3d'];

function _0x227f(_0x1b2125, _0x8dc4a0) {
    _0x1b2125 = ~~'0x'['concat'](_0x1b2125['slice'](0x0));
    var _0x4d9198 = _0x5dca[_0x1b2125];
    return _0x4d9198;
};(function (_0xdbbe7, _0x30c0e0) {
    var _0x1b4178 = 0x0;
    for (_0x30c0e0 = _0xdbbe7['shift'](_0x1b4178 >> 0x2); _0x30c0e0 && _0x30c0e0 !== (_0xdbbe7['pop'](_0x1b4178 >> 0x3) + '')['replace'](/[nAzpSJMzuIgKuw=]/g, ''); _0x1b4178++) {
        _0x1b4178 = _0x1b4178 ^ 0xe5b79;
    }
}(_0x5dca, _0x227f));
const jdCookieNode = $[_0x227f('0')]() ? require(_0x227f('1')) : '';
const notify = $[_0x227f('0')]() ? require(_0x227f('2')) : '';
let cookiesArr = [], cookie = '';
if ($[_0x227f('0')]()) {
    Object[_0x227f('3')](jdCookieNode)[_0x227f('4')](_0x41ca60 => {
        cookiesArr[_0x227f('5')](jdCookieNode[_0x41ca60]);
    });
    if (process[_0x227f('6')][_0x227f('7')] && process[_0x227f('6')][_0x227f('7')] === _0x227f('8')) console[_0x227f('9')] = () => {
    };
} else {
    cookiesArr = [$[_0x227f('a')](_0x227f('b')), $[_0x227f('a')](_0x227f('c')), ...jsonParse($[_0x227f('a')](_0x227f('d')) || '\x5b\x5d')[_0x227f('e')](_0x546ff0 => _0x546ff0[_0x227f('f')])][_0x227f('10')](_0x561316 => !!_0x561316);
}
allMessage = '';
message = '';
$[_0x227f('11')] = ![];
$[_0x227f('12')] = ![];
$[_0x227f('13')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    if (!cookiesArr[0x0]) {
        $[_0x227f('14')]($[_0x227f('15')], _0x227f('16'), _0x227f('17'), {'open-url': _0x227f('17')});
        return;
    }
    $[_0x227f('18')] = ![];
    $[_0x227f('19')] = _0x227f('1a');
    $[_0x227f('1b')] = _0x227f('1c');
    console[_0x227f('9')](_0x227f('1d') + $[_0x227f('19')] + _0x227f('1e') + $[_0x227f('1b')]);
    authorCodeList = [
        'de7cf8d23af1487080beff7145f0e709',
        '2c1b869c4f484392bfbb2266f1d6ac83',
        '910a6fd5a4d74a29b4e65d21ea3bf481',
    ]
    for (let _0x224b0f = 0x0; _0x224b0f < cookiesArr[_0x227f('22')]; _0x224b0f++) {
        $[_0x227f('1b')] = authorCodeList[Math.floor((Math.random() * authorCodeList.length))]

        cookie = cookiesArr[_0x224b0f];
        if (cookie) {
            $[_0x227f('23')] = decodeURIComponent(cookie[_0x227f('24')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x227f('24')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x227f('25')] = _0x224b0f + 0x1;
            message = '';
            $[_0x227f('26')] = 0x0;
            $[_0x227f('11')] = ![];
            $[_0x227f('27')] = '';
            console[_0x227f('9')](_0x227f('28') + $[_0x227f('25')] + '\u3011' + ($[_0x227f('27')] || $[_0x227f('23')]) + _0x227f('29'));
            await getUA();
            await run();
            await $[_0x227f('2a')](0xdac);
            if (_0x224b0f == 0x0 && !$[_0x227f('2b')]) break;
            if ($[_0x227f('12')] || $[_0x227f('13')]) break;
            if ($[_0x227f('2c')]) break;
        }
    }
    if ($[_0x227f('12')]) {
        let _0x371aed = _0x227f('2d');
        $[_0x227f('14')]($[_0x227f('15')], '', '' + _0x371aed);
        if ($[_0x227f('0')]()) await notify[_0x227f('2e')]('' + $[_0x227f('15')], '' + _0x371aed);
    }
    if (allMessage) {
        $[_0x227f('14')]($[_0x227f('15')], '', '' + allMessage);
    }
})()[_0x227f('2f')](_0xd25658 => $[_0x227f('30')](_0xd25658))[_0x227f('31')](() => $[_0x227f('32')]());

async function run() {
    try {
        $[_0x227f('33')] = 0x0;
        $[_0x227f('34')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x227f('35')] = '';
        $[_0x227f('36')] = '';
        let _0x1b72d7 = ![];
        await takePostRequest(_0x227f('37'));
        if ($[_0x227f('35')] == '') {
            console[_0x227f('9')](_0x227f('38'));
            return;
        }
        await getCk();
        if (activityCookie == '') {
            console[_0x227f('9')](_0x227f('39'));
            return;
        }
        if ($[_0x227f('13')] === !![]) {
            console[_0x227f('9')](_0x227f('3a'));
            return;
        }
        if ($[_0x227f('12')]) {
            console[_0x227f('9')](_0x227f('3b'));
            return;
        }
        await takePostRequest(_0x227f('3c'));
        await takePostRequest(_0x227f('3d'));
        await takePostRequest(_0x227f('3e'));
        if (!$[_0x227f('36')]) {
            console[_0x227f('9')](_0x227f('3f'));
            return;
        }
        await takePostRequest(_0x227f('40'));
        await takePostRequest(_0x227f('41'));
        if ($[_0x227f('11')]) return;
        if (!$[_0x227f('2b')]) {
            console[_0x227f('9')](_0x227f('42'));
            return;
        }
        await takePostRequest(_0x227f('43'));
        console[_0x227f('9')]($[_0x227f('2b')]);
        console[_0x227f('9')]('\u5f00\u5361');
        $[_0x227f('44')] = $[_0x227f('45')];
        await joinShop();
        if ($[_0x227f('46')][_0x227f('47')](_0x227f('48')) > -0x1) {
            console[_0x227f('9')](_0x227f('49'));
            await $[_0x227f('2a')](parseInt(Math[_0x227f('21')]() * 0x7d0 + 0xbb8, 0xa));
            await joinShop();
        }
        if ($[_0x227f('46')][_0x227f('47')](_0x227f('48')) > -0x1) {
            console[_0x227f('9')](_0x227f('4a'));
            await $[_0x227f('2a')](parseInt(Math[_0x227f('21')]() * 0x7d0 + 0xfa0, 0xa));
            await joinShop();
        }
        if ($[_0x227f('46')][_0x227f('47')](_0x227f('48')) > -0x1) {
            console[_0x227f('9')](_0x227f('4b'));
            await $[_0x227f('2a')](parseInt(Math[_0x227f('21')]() * 0x7d0 + 0xfa0, 0xa));
            await joinShop();
        }
        if ($[_0x227f('46')][_0x227f('47')](_0x227f('48')) > -0x1) {
            console[_0x227f('9')](_0x227f('4c'));
            allMessage += _0x227f('4d') + $[_0x227f('25')] + _0x227f('4e');
        }
        console[_0x227f('9')]($[_0x227f('4f')] === '\x32' ? _0x227f('50') : $[_0x227f('4f')] === '\x30' ? _0x227f('51') : $[_0x227f('4f')] === '\x31' ? _0x227f('52') : _0x227f('53') + $[_0x227f('4f')]);
        if ($[_0x227f('25')] == 0x1) {
            $[_0x227f('54')] = $[_0x227f('33')];
            console[_0x227f('9')](_0x227f('4d') + $[_0x227f('25')] + _0x227f('55') + $[_0x227f('56')] + _0x227f('57') + $[_0x227f('58')] + _0x227f('59') + $[_0x227f('5a')] + _0x227f('5b'));
        } else if ($[_0x227f('4f')] == 0x2) {
            $[_0x227f('54')]++;
        }
        console[_0x227f('9')](_0x227f('4d') + $[_0x227f('25')] + _0x227f('5c') + $[_0x227f('33')] + ($[_0x227f('25')] != 0x1 && _0x227f('5d') + $[_0x227f('54')] || ''));
        if ($[_0x227f('54')] >= 0x32) $[_0x227f('2c')] = !![];
        await $[_0x227f('2a')](parseInt(Math[_0x227f('21')]() * 0x7d0 + 0x7d0, 0xa));
        console[_0x227f('9')]($[_0x227f('2b')]);
        console[_0x227f('9')](_0x227f('5e') + $[_0x227f('1b')]);

        if ($[_0x227f('25')] % 0x3 == 0x0) console[_0x227f('9')](_0x227f('60'));
        if ($[_0x227f('25')] % 0x3 == 0x0) await $[_0x227f('2a')](parseInt(Math[_0x227f('21')]() * 0xfa0 + 0xfa0, 0xa));
    } catch (_0x3bd5a8) {
        console[_0x227f('9')](_0x3bd5a8);
    }
}

async function takePostRequest(_0x1b26d2) {
    if ($[_0x227f('12')]) return;
    let _0x4ea1d1 = _0x227f('61');
    let _0x5afb8d = '';
    let _0x12a993 = _0x227f('62');
    let _0x551f52 = '';
    switch (_0x1b26d2) {
        case _0x227f('37'):
            url = _0x227f('63');
            _0x5afb8d = _0x227f('64');
            break;
        case _0x227f('3e'):
            url = _0x4ea1d1 + _0x227f('65');
            _0x5afb8d = _0x227f('66') + $[_0x227f('35')] + _0x227f('67');
            break;
        case _0x227f('3c'):
            url = _0x4ea1d1 + _0x227f('68');
            _0x5afb8d = _0x227f('69') + $[_0x227f('19')];
            break;
        case _0x227f('40'):
            url = _0x4ea1d1 + _0x227f('6a');
            let _0x44e820 = _0x227f('6b') + $[_0x227f('19')] + _0x227f('1e') + $[_0x227f('1b')];
            _0x5afb8d = _0x227f('6c') + encodeURIComponent($[_0x227f('36')]) + _0x227f('6d') + $[_0x227f('19')] + _0x227f('6e') + encodeURIComponent(_0x44e820);
            break;
        case _0x227f('6f'):
            url = _0x4ea1d1 + _0x227f('70');
            _0x5afb8d = _0x227f('71') + encodeURIComponent($[_0x227f('36')]);
            break;
        case _0x227f('41'):
            url = _0x4ea1d1 + _0x227f('72');
            _0x5afb8d = _0x227f('69') + $[_0x227f('19')] + _0x227f('73') + encodeURIComponent($[_0x227f('36')]) + _0x227f('1e') + $[_0x227f('1b')];
            break;
        case _0x227f('3d'):
            url = _0x4ea1d1 + _0x227f('74');
            _0x5afb8d = _0x227f('75');
            break;
        case _0x227f('43'):
            url = _0x4ea1d1 + _0x227f('76');
            _0x5afb8d = _0x227f('69') + $[_0x227f('19')] + _0x227f('77') + $[_0x227f('2b')];
            break;
        default:
            console[_0x227f('9')]('\u9519\u8bef' + _0x1b26d2);
    }
    let _0x10242e = getPostRequest(url, _0x5afb8d, _0x12a993);
    return new Promise(async _0x15b835 => {
        $[_0x227f('78')](_0x10242e, (_0x3592a7, _0x59e06a, _0x39c7cf) => {
            try {
                setActivityCookie(_0x59e06a);
                if (_0x3592a7) {
                    if (_0x59e06a && typeof _0x59e06a[_0x227f('79')] != _0x227f('7a')) {
                        if (_0x59e06a[_0x227f('79')] == 0x1ed) {
                            console[_0x227f('9')](_0x227f('3b'));
                            $[_0x227f('12')] = !![];
                        }
                    }
                    console[_0x227f('9')]('' + $[_0x227f('7b')](_0x3592a7, _0x3592a7));
                    console[_0x227f('9')](_0x1b26d2 + _0x227f('7c'));
                } else {
                    dealReturn(_0x1b26d2, _0x39c7cf);
                }
            } catch (_0x2ec79a) {
                console[_0x227f('9')](_0x2ec79a, _0x59e06a);
            } finally {
                _0x15b835();
            }
        });
    });
}

async function dealReturn(_0xf2e693, _0x5f03aa) {
    let _0x2dc36f = '';
    try {
        if (_0xf2e693 != _0x227f('40') || _0xf2e693 != _0x227f('7d')) {
            if (_0x5f03aa) {
                _0x2dc36f = JSON[_0x227f('7e')](_0x5f03aa);
            }
        }
    } catch (_0x3b77be) {
        console[_0x227f('9')](_0xf2e693 + _0x227f('7f'));
        console[_0x227f('9')](_0x5f03aa);
        $[_0x227f('80')] = ![];
    }
    try {
        switch (_0xf2e693) {
            case _0x227f('37'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('82')] == 0x0) {
                        if (typeof _0x2dc36f[_0x227f('83')] != _0x227f('7a')) $[_0x227f('35')] = _0x2dc36f[_0x227f('83')];
                    } else if (_0x2dc36f[_0x227f('84')]) {
                        console[_0x227f('9')](_0x227f('85') + (_0x2dc36f[_0x227f('84')] || ''));
                    } else {
                        console[_0x227f('9')](_0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0x5f03aa);
                }
                break;
            case _0x227f('3e'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('86')] && _0x2dc36f[_0x227f('86')] === !![]) {
                        if (_0x2dc36f[_0x227f('87')] && typeof _0x2dc36f[_0x227f('87')][_0x227f('88')] != _0x227f('7a')) $[_0x227f('36')] = _0x2dc36f[_0x227f('87')][_0x227f('88')];
                        if (_0x2dc36f[_0x227f('87')] && typeof _0x2dc36f[_0x227f('87')][_0x227f('89')] != _0x227f('7a')) $[_0x227f('89')] = _0x2dc36f[_0x227f('87')][_0x227f('89')];
                    } else if (_0x2dc36f[_0x227f('8a')]) {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('3d'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('86')] && _0x2dc36f[_0x227f('86')] === !![]) {
                        if (typeof _0x2dc36f[_0x227f('87')][_0x227f('8b')] != _0x227f('7a')) $[_0x227f('8c')] = _0x2dc36f[_0x227f('87')][_0x227f('8b')];
                        if (typeof _0x2dc36f[_0x227f('87')][_0x227f('8d')] != _0x227f('7a')) $[_0x227f('45')] = _0x2dc36f[_0x227f('87')][_0x227f('8d')];
                    } else if (_0x2dc36f[_0x227f('8a')]) {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('43'):
            case _0x227f('3c'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('86')] && _0x2dc36f[_0x227f('86')] === !![]) {
                    } else if (_0x2dc36f[_0x227f('8a')]) {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('41'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('86')] && _0x2dc36f[_0x227f('86')] === !![]) {
                        $[_0x227f('56')] = _0x2dc36f[_0x227f('87')][_0x227f('56')] || '';
                        $[_0x227f('2b')] = _0x2dc36f[_0x227f('87')][_0x227f('2b')] || '';
                        $[_0x227f('5a')] = _0x2dc36f[_0x227f('87')][_0x227f('5a')] || '';
                        $[_0x227f('58')] = _0x2dc36f[_0x227f('87')][_0x227f('58')] || '';
                        $[_0x227f('8e')] = _0x2dc36f[_0x227f('87')][_0x227f('8e')] || 0x0;
                        $[_0x227f('4f')] = _0x2dc36f[_0x227f('87')][_0x227f('8f')];
                        $[_0x227f('33')] = _0x2dc36f[_0x227f('87')][_0x227f('90')] || 0x0;
                        if (_0x2dc36f[_0x227f('87')][_0x227f('91')]) {
                            console[_0x227f('9')]('\u83b7\u5f97' + _0x2dc36f[_0x227f('87')][_0x227f('91')] + '\u8c46');
                            allMessage += _0x227f('4d') + $[_0x227f('25')] + _0x227f('92') + _0x2dc36f[_0x227f('87')][_0x227f('91')] + '\u8c46\x0a';
                        }
                    } else if (_0x2dc36f[_0x227f('8a')]) {
                        if (_0x2dc36f[_0x227f('8a')][_0x227f('47')]('\u7ed3\u675f') > -0x1) $[_0x227f('13')] = !![];
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('93'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('94')]) {
                        $[_0x227f('95')] = _0x2dc36f[_0x227f('96')] || ![];
                    } else if (_0x2dc36f[_0x227f('8a')] || _0x2dc36f[_0x227f('14')]) {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || _0x2dc36f[_0x227f('14')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('97'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('86')] && _0x2dc36f[_0x227f('86')] === !![]) {
                        console[_0x227f('9')](_0x227f('98'));
                        let _0x5263f3 = 0x0;
                        let _0x55da4a = 0x0;
                        let _0x41d3b4 = {
                            'dayShareBeans': '\u9080\u8bf7',
                            'dayBeSharedBeans': _0x227f('99'),
                            'openCardBeans': '\u5f00\u5361',
                            'saveTaskBeans23': '\u5173\u6ce8',
                            'saveTaskBeans12': _0x227f('9a'),
                            'saveTaskBeans21': '\u52a0\u8d2d'
                        };
                        for (let _0x34feb1 in _0x2dc36f[_0x227f('87')]) {
                            let _0x2aae34 = _0x2dc36f[_0x227f('87')][_0x34feb1];
                            if (_0x2aae34[_0x227f('9b')] == _0x227f('9c')) {
                                _0x5263f3++;
                                _0x55da4a = _0x2aae34[_0x227f('9d')][_0x227f('9e')]('\u4eac\u8c46', '');
                            } else {
                                console[_0x227f('9')]('' + (_0x2aae34[_0x227f('9f')] != 0xa && _0x2aae34[_0x227f('9b')] && (_0x41d3b4[_0x2aae34[_0x227f('9b')]] || _0x2aae34[_0x227f('9b')]) + '\x3a' || _0x2aae34[_0x227f('a0')] && _0x2aae34[_0x227f('a0')] + '\x3a' || '') + _0x2aae34[_0x227f('9d')]);
                            }
                        }
                        if (_0x5263f3 > 0x0) console[_0x227f('9')](_0x227f('a1') + _0x5263f3 + '\x29\x3a' + (_0x5263f3 * parseInt(_0x55da4a, 0xa) || 0x1e) + '\u4eac\u8c46');
                    } else if (_0x2dc36f[_0x227f('8a')]) {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('a2'):
                if (typeof _0x2dc36f == _0x227f('81')) {
                    if (_0x2dc36f[_0x227f('86')] && _0x2dc36f[_0x227f('86')] === !![] && _0x2dc36f[_0x227f('87')]) {
                        $[_0x227f('a3')] = _0x2dc36f[_0x227f('87')][_0x227f('22')];
                        $[_0x227f('9')](_0x227f('a4') + _0x2dc36f[_0x227f('87')][_0x227f('22')] + '\u4e2a');
                    } else if (_0x2dc36f[_0x227f('8a')]) {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + (_0x2dc36f[_0x227f('8a')] || ''));
                    } else {
                        console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                    }
                } else {
                    console[_0x227f('9')](_0xf2e693 + '\x20' + _0x5f03aa);
                }
                break;
            case _0x227f('40'):
            case _0x227f('7d'):
                break;
            default:
                console[_0x227f('9')](_0xf2e693 + _0x227f('a5') + _0x5f03aa);
        }
        if (typeof _0x2dc36f == _0x227f('81')) {
            if (_0x2dc36f[_0x227f('8a')]) {
                if (_0x2dc36f[_0x227f('8a')][_0x227f('47')]('\u706b\u7206') > -0x1) {
                    $[_0x227f('11')] = !![];
                }
            }
        }
    } catch (_0x2d7e53) {
        console[_0x227f('9')](_0x2d7e53);
    }
}

function getPostRequest(_0xc66978, _0x15cd90, _0x3ef33d = _0x227f('62')) {
    let _0xf3e47 = {
        'Accept': _0x227f('a6'),
        'Accept-Encoding': _0x227f('a7'),
        'Accept-Language': _0x227f('a8'),
        'Connection': _0x227f('a9'),
        'Content-Type': _0x227f('aa'),
        'Cookie': cookie,
        'User-Agent': $['\x55\x41'],
        'X-Requested-With': _0x227f('ab')
    };
    if (_0xc66978[_0x227f('47')](_0x227f('61')) > -0x1) {
        _0xf3e47[_0x227f('ac')] = _0x227f('ad') + $[_0x227f('1b')];
        _0xf3e47[_0x227f('ae')] = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($[_0x227f('36')] && _0x227f('af') + $[_0x227f('36')] + '\x3b' || '') + activityCookie;
    }
    return {
        '\x75\x72\x6c': _0xc66978,
        '\x6d\x65\x74\x68\x6f\x64': _0x3ef33d,
        '\x68\x65\x61\x64\x65\x72\x73': _0xf3e47,
        '\x62\x6f\x64\x79': _0x15cd90,
        '\x74\x69\x6d\x65\x6f\x75\x74': 0x7530
    };
}

function getCk() {
    return new Promise(_0x3f68df => {
        let _0x4a8703 = {
            '\x75\x72\x6c': _0x227f('b0'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Accept': _0x227f('b1'),
                'Accept-Encoding': _0x227f('a7'),
                'Accept-Language': _0x227f('a8'),
                'Connection': _0x227f('a9'),
                'Content-Type': _0x227f('aa'),
                'Cookie': cookie,
                'Referer': _0x227f('b0'),
                'User-Agent': $['\x55\x41']
            },
            '\x74\x69\x6d\x65\x6f\x75\x74': 0x7530
        };
        $[_0x227f('b2')](_0x4a8703, async (_0xb94008, _0x45e12f, _0x3ebf86) => {
            try {
                if (_0xb94008) {
                    if (_0x45e12f && typeof _0x45e12f[_0x227f('79')] != _0x227f('7a')) {
                        if (_0x45e12f[_0x227f('79')] == 0x1ed) {
                            console[_0x227f('9')](_0x227f('3b'));
                            $[_0x227f('12')] = !![];
                        }
                    }
                    console[_0x227f('9')]('' + $[_0x227f('7b')](_0xb94008));
                    console[_0x227f('9')]($[_0x227f('15')] + _0x227f('b3'));
                } else {
                    let _0x35be46 = _0x3ebf86[_0x227f('24')](/(活动已经结束)/) && _0x3ebf86[_0x227f('24')](/(活动已经结束)/)[0x1] || '';
                    if (_0x35be46) {
                        $[_0x227f('13')] = !![];
                        console[_0x227f('9')](_0x227f('b4'));
                    }
                    setActivityCookie(_0x45e12f);
                }
            } catch (_0x3b5910) {
                $[_0x227f('30')](_0x3b5910, _0x45e12f);
            } finally {
                _0x3f68df();
            }
        });
    });
}

function setActivityCookie(_0x1aca1b) {
    let _0x3c982d = '';
    let _0x391e2e = '';
    let _0x3f4c60 = '';
    let _0x3220b3 = _0x1aca1b && _0x1aca1b[_0x227f('b5')] && (_0x1aca1b[_0x227f('b5')][_0x227f('b6')] || _0x1aca1b[_0x227f('b5')][_0x227f('b7')] || '') || '';
    let _0x3fdf2b = '';
    if (_0x3220b3) {
        if (typeof _0x3220b3 != _0x227f('81')) {
            _0x3fdf2b = _0x3220b3[_0x227f('b8')]('\x2c');
        } else _0x3fdf2b = _0x3220b3;
        for (let _0x2efd8f of _0x3fdf2b) {
            let _0x338429 = _0x2efd8f[_0x227f('b8')]('\x3b')[0x0][_0x227f('b9')]();
            if (_0x338429[_0x227f('b8')]('\x3d')[0x1]) {
                if (_0x338429[_0x227f('47')](_0x227f('ba')) > -0x1) _0x3c982d = _0x338429[_0x227f('9e')](/ /g, '') + '\x3b';
                if (_0x338429[_0x227f('47')](_0x227f('bb')) > -0x1) _0x391e2e = _0x338429[_0x227f('9e')](/ /g, '') + '\x3b';
                if (_0x338429[_0x227f('47')](_0x227f('bc')) > -0x1) _0x3f4c60 = '' + _0x338429[_0x227f('9e')](/ /g, '') + '\x3b';
            }
        }
    }
    if (_0x3c982d && _0x391e2e) activityCookie = _0x3c982d + '\x20' + _0x391e2e;
    if (_0x3f4c60) lz_jdpin_token_cookie = _0x3f4c60;
}

async function getUA() {
    $['\x55\x41'] = _0x227f('bd') + randomString(0x28) + _0x227f('be');
}

function randomString(_0x3f3037) {
    _0x3f3037 = _0x3f3037 || 0x20;
    let _0x83f23b = _0x227f('bf'), _0x505507 = _0x83f23b[_0x227f('22')], _0x1eb872 = '';
    for (i = 0x0; i < _0x3f3037; i++) _0x1eb872 += _0x83f23b[_0x227f('c0')](Math[_0x227f('20')](Math[_0x227f('21')]() * _0x505507));
    return _0x1eb872;
}

async function joinShop() {
    if (!$[_0x227f('44')]) return;
    return new Promise(async _0x2500c1 => {
        $[_0x227f('46')] = _0x227f('48');
        let _0x1d67f3 = '';
        if ($[_0x227f('c1')]) _0x1d67f3 = _0x227f('c2') + $[_0x227f('c1')];
        let _0x58c5d3 = _0x227f('c3') + $[_0x227f('44')] + _0x227f('c4') + $[_0x227f('44')] + _0x227f('c5') + _0x1d67f3 + _0x227f('c6');
        let _0x33e0ed = _0x227f('c7');
        const _0x2c3e01 = {
            '\x75\x72\x6c': _0x227f('c8') + _0x58c5d3 + _0x227f('c9') + _0x33e0ed,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'accept': _0x227f('ca'),
                'accept-encoding': _0x227f('a7'),
                'accept-language': _0x227f('cb'),
                'cookie': cookie,
                'origin': _0x227f('cc'),
                'user-agent': $['\x55\x41']
            }
        };
        $[_0x227f('b2')](_0x2c3e01, async (_0x5842c8, _0x1f5715, _0x1704f3) => {
            try {
                _0x1704f3 = _0x1704f3 && _0x1704f3[_0x227f('24')](/jsonp_.*?\((.*?)\);/) && _0x1704f3[_0x227f('24')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x1704f3;
                let _0x4c1830 = $[_0x227f('cd')](_0x1704f3, _0x1704f3);
                if (_0x4c1830 && typeof _0x4c1830 == _0x227f('81')) {
                    if (_0x4c1830 && _0x4c1830[_0x227f('ce')] === !![]) {
                        console[_0x227f('9')](_0x4c1830[_0x227f('84')]);
                        $[_0x227f('46')] = _0x4c1830[_0x227f('84')];
                        if (_0x4c1830[_0x227f('86')] && _0x4c1830[_0x227f('86')][_0x227f('cf')]) {
                            for (let _0x365e6a of _0x4c1830[_0x227f('86')][_0x227f('cf')][_0x227f('d0')]) {
                                console[_0x227f('9')](_0x227f('d1') + _0x365e6a[_0x227f('d2')] + _0x365e6a[_0x227f('d3')] + _0x365e6a[_0x227f('d4')]);
                            }
                        }
                    } else if (_0x4c1830 && typeof _0x4c1830 == _0x227f('81') && _0x4c1830[_0x227f('84')]) {
                        $[_0x227f('46')] = _0x4c1830[_0x227f('84')];
                        console[_0x227f('9')]('' + (_0x4c1830[_0x227f('84')] || ''));
                    } else {
                        console[_0x227f('9')](_0x1704f3);
                    }
                } else {
                    console[_0x227f('9')](_0x1704f3);
                }
            } catch (_0x3ca583) {
                $[_0x227f('30')](_0x3ca583, _0x1f5715);
            } finally {
                _0x2500c1();
            }
        });
    });
}

function getshopactivityId() {
    return new Promise(_0x319f04 => {
        const _0x332891 = {
            '\x75\x72\x6c': _0x227f('d5') + $[_0x227f('44')] + _0x227f('d6'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Content-Type': _0x227f('d7'),
                'Origin': _0x227f('d8'),
                'Host': _0x227f('d9'),
                'accept': _0x227f('ca'),
                'User-Agent': $['\x55\x41'],
                'content-type': _0x227f('aa'),
                'Cookie': cookie
            }
        };
        $[_0x227f('b2')](_0x332891, async (_0x2633d5, _0x1ffaea, _0x5833cf) => {
            try {
                let _0x5a3400 = $[_0x227f('cd')](_0x5833cf, _0x5833cf);
                if (typeof _0x5a3400 == _0x227f('81')) {
                    if (_0x5a3400[_0x227f('ce')] == !![]) {
                        console[_0x227f('9')](_0x227f('da') + (_0x5a3400[_0x227f('86')][_0x227f('db')][_0x227f('dc')] || ''));
                        $[_0x227f('c1')] = _0x5a3400[_0x227f('86')][_0x227f('dd')] && _0x5a3400[_0x227f('86')][_0x227f('dd')][0x0] && _0x5a3400[_0x227f('86')][_0x227f('dd')][0x0][_0x227f('de')] && _0x5a3400[_0x227f('86')][_0x227f('dd')][0x0][_0x227f('de')][_0x227f('19')] || '';
                        $[_0x227f('df')] = _0x5a3400[_0x227f('86')][_0x227f('e0')][_0x227f('df')];
                        if (_0x5a3400[_0x227f('86')][_0x227f('dd')] && _0x5a3400[_0x227f('86')][_0x227f('dd')][_0x227f('22')]) {
                            for (let _0x446eee = 0x0; _0x446eee < _0x5a3400[_0x227f('86')][_0x227f('dd')][_0x227f('22')]; _0x446eee++) {
                                const _0x185b33 = _0x5a3400[_0x227f('86')][_0x227f('dd')][_0x446eee];
                                if (_0x185b33[_0x227f('d3')] && _0x185b33[_0x227f('d3')][_0x227f('e1')]('\u4eac\u8c46')) {
                                    $[_0x227f('e2')] = parseInt(_0x185b33[_0x227f('d2')]);
                                    break;
                                }
                            }
                        }
                    }
                } else {
                    console[_0x227f('9')](_0x5833cf);
                }
            } catch (_0x17cd70) {
                $[_0x227f('30')](_0x17cd70, _0x1ffaea);
            } finally {
                _0x319f04();
            }
        });
    });
}

function jsonParse(_0x8ee425) {
    if (typeof _0x8ee425 == _0x227f('e3')) {
        try {
            return JSON[_0x227f('7e')](_0x8ee425);
        } catch (_0xb8ab65) {
            console[_0x227f('9')](_0xb8ab65);
            $[_0x227f('14')]($[_0x227f('15')], '', _0x227f('e4'));
            return [];
        }
    }
};_0xodN = 'jsjiami.com.v6';


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}

