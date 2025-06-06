let obj = JSON.parse($response.body);

obj.data = {
  "vip": true,
  "plan": "pro",
  "expire_date": "2099-12-31",
  "features": ["remove_watermark", "hd_export", "premium_effects"]
};

$done({ body: JSON.stringify(obj) });
