// 定义请求体
const modifiedHeaders = $request.headers;
modifiedHeaders['User-Agent'] = 'Mozilla/6.0 (iPhone 15; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1';
modifiedHeaders['user-agent'] = 'Mozilla/6.0 (iPhone 15; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1';

// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<meta http-equiv="Content-Security-Policy" content="*">\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'

// 定义响应体
const body = $response.body.replace(regex, replace_str);

// 定义响应头
const headers = $response.headers;
headers['Content-Security-Policy'] = '*';

$done({ headers: modifiedHeaders, headers: headers, body: body })
