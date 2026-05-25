# 愛烤PRO 全站圖片審計 + 高質量替換 Prompt

---

## 一、圖片分類總覽

| 檔案 | 來源 | 品質評級 | 建議 |
|------|------|---------|------|
| **hero.png** | AI 生成 | ⚠️ C（有明顯瑕疵） | **優先替換** |
| **hero.jpg** | AI 生成 | △ B（構圖好、輕微 AI 感） | 可用，建議升級 |
| **service-family.jpg** | AI 生成 | △ B（面部輕微 AI 感） | 可用，逐步替換 |
| **service-company.jpg** | AI 生成 | △ B（面部/手部 AI 感） | 可用，逐步替換 |
| **service-camping.jpg** | AI 生成 | ✅ B+（整體自然） | 可用，保留 |
| **logo.png** | AI 生成 | ⚠️ C（顏色不準） | 已用 SVG 替代，可刪除 |
| **family.png** | 真實照片 | ✅ A- | 保留 |
| **company.png** | 真實照片 | ✅ A- | 保留 |
| **camping.png** | 真實照片 | ✅ A- | 保留 |
| **case1~4.png** | 真實照片 | ✅ A- | 保留 |

---

## 二、AI 圖逐張評估 + 替換 Prompt

### hero.png — ⚠️ 優先替換

**問題**：
- 手部嚴重不自然（多手指/扭曲）
- 背景招牌文字為 AI 偽文字（無法辨識的符號）
- 煙霧效果不真實、呈塊狀
- 光線方向不一致

**使用位置**：首頁 Hero 區右側大圖

**替換 Prompt**：
```
Professional food photography of a Taiwanese BBQ chef grilling meat skewers on a charcoal grill at an outdoor garden party. Warm golden hour lighting, shallow depth of field with bokeh background. Visible flames and smoke rising from the grill. Fresh ingredients (vegetables, raw meat platters) arranged on wooden cutting boards nearby. The chef wears a black apron and cap, focused on the grilling. The scene conveys warmth, professionalism, and festive atmosphere. Shot from a 45-degree angle, medium shot. No text, no logos. Warm color tone with orange and brown palette. 4K, photorealistic, editorial food photography style.
```

**建議比例**：4:3 或 16:9

---

### hero.jpg — △ 可用，建議升級

**評估**：構圖極佳（黃金時段、家庭圍繞烤爐），但人物面部有輕微 AI 平滑感。作為 Hero 背景或替代 hero.png 的上位選擇。

**使用位置**：暫未引用（可考慮替換 hero.png）

**替換 Prompt**：
```
A warm and joyful Taiwanese family having a BBQ party in their backyard during golden hour. Three generations: grandparents, parents, and a child around a charcoal grill. The child holds a skewer, grandparents smile warmly. Plates of fresh raw meat, vegetables, and seafood on a wooden table. String lights in the background garden. Natural warm sunset lighting casting golden glow. Shot from slightly elevated angle, medium-wide shot. Authentic candid moment, no posed look. Warm orange and green tones. No text, no logos. 4K, photorealistic, lifestyle photography style.
```

---

### service-family.jpg — △ 可用，逐步替換

**評估**：三代同堂烤肉場景，構圖溫馨，但長者面部有典型 AI 平滑感（皮膚過於完美、缺乏紋理）。

**使用位置**：/services「家庭聚餐」服務卡片

**替換 Prompt**：
```
A candid photo of a multi-generation Taiwanese family enjoying a BBQ gathering in a beautiful backyard. Grandparents sitting together, parents grilling meat, children laughing and eating. Fresh BBQ ingredients on wooden boards: sausages, chicken wings, vegetables. Natural afternoon sunlight, warm and cozy atmosphere. Shot from a medium distance, slightly wide angle. Authentic family moment, natural expressions, not overly posed. Warm color palette. No text. 4K, lifestyle photography.
```

---

### service-company.jpg — △ 可用，逐步替換

**評估**：公司派對戶外烤肉，人物面部/手部有 AI 不自然感，但場景氛圍好。

**使用位置**：/services「公司派對」服務卡片

**替換 Prompt**：
```
A group of Taiwanese young professionals having a company team-building BBQ party in a modern outdoor venue at sunset. String lights overhead, people laughing, clinking glasses of beer/wine. A professional grill with sizzling meat skewers in the foreground. Warm ambient lighting mixed with golden sunset. Shot from a medium-wide angle capturing the social atmosphere. Candid, joyful expressions. No text, no logos. Warm tones, 4K, event photography style.
```

---

### service-camping.jpg — ✅ 保留

**評估**：露營烤肉場景，整體自然度高，人物動作合理，營地環境真實。是 service 系列中品質最好的一張。

**使用位置**：/services「露營／民宿」服務卡片

**替換 Prompt**（如需升級）：
```
A group of friends camping by a lakeside, having a BBQ at a campsite surrounded by lush green mountains. A portable charcoal grill on a folding table, meat and vegetables grilling. Camping tent in the background, folding chairs around. Bright natural daylight, fresh outdoor atmosphere. Shot from a medium distance, wide angle capturing the scenic environment. Relaxed, happy vibe. No text. 4K, outdoor lifestyle photography.
```

---

### logo.png — ⚠️ 已棄用

**評估**：AI 生成 logo，顏色偏暗，細節不精緻。已在 Nav.astro 中改用內聯 SVG。

**建議**：直接刪除，不再使用。

---

## 三、真實照片（保留，無需替換）

以下圖片為真實拍攝的餐點/服務照片，品質合格，建議全部保留：

| 檔案 | 內容 | 用途 |
|------|------|------|
| family.png | 手工香腸+蔬菜擺盤 | 首頁服務卡片 |
| company.png | 烤肉拼盤 | 首頁服務卡片 |
| camping.png | 牛肉粒生菜盤 | 首頁服務卡片 |
| case1.png | 烤蔬菜拼盤 | 精選案例卡片 |
| case2.png | 烤豬排+配菜 | 精選案例卡片 |
| case3.png | 烤肉串拼盤 | 精選案例卡片 |
| case4.png | 桌上全套擺盤 | 精選案例卡片 |

---

## 四、Hero 審美評估（關鍵結論）

### 當前 hero.png 的問題

從審美角度，hero.png **必須替換**，原因：

1. **手部災難**：AI 典型的多手指/扭曲手指，專業度瞬間歸零
2. **偽文字招牌**：背景有無法辨識的 AI 偽文字，像雜訊
3. **煙霧塊狀化**：不自然的數字煙霧效果
4. **與品牌定位落差**：愛烤PRO 主打「專業到府代烤」，hero 圖應傳達專業感而非廉價 AI 感

### hero.jpg 是更好的上位替代

hero.jpg（黃金時段家庭烤肉）雖也是 AI 生成，但：
- ✅ 構圖極佳（黃金時段光線、圍繞烤爐的構圖）
- ✅ 人物互動自然（牽手烤肉動作）
- ✅ 面部瑕疵在縮圖/遠距離不明顯
- ✅ 氛圍完全符合「家庭聚餐・歡樂烤肉」品牌調性

**建議**：用 hero.jpg 直接替換 hero.png 作為 Hero 區圖片，hero.png 刪除。

### 最理想的 Hero 圖

若能取得更高質量圖片，建議方向：
- **專業烤師現場操作**（強化「專業到府」定位）
- **餐點 close-up + 火焰**（強化食欲感）
- **真實客戶活動場景**（強化信任感）

---

## 五、執行建議優先級

| 優先級 | 動作 | 預估時間 |
|--------|------|---------|
| P0 | 用 hero.jpg 替換 hero.png，刪除 hero.png | 5 min |
| P1 | 用上述 Prompt 生成新 hero 圖（替代 hero.jpg） | 10 min |
| P2 | 用 Prompt 生成 service-family/company 替換圖 | 20 min |
| P3 | 刪除 logo.png | 1 min |
| 不動 | family/company/camping.png + case1~4.png | — |
