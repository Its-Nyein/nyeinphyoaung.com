---
title: "JavaScript Event Loop အကြောင်း"
description: "JavaScript Event Loop, Single Thread နှင့် Multi Thread အကြောင်း အသေးစိတ် လေ့လာခြင်း - Call Stack, Microtask Queue, Task Queue တို့ကို နားလည်အောင် ရှင်းပြထားပါသည်"
excerpt: "Event Loop အလုပ်လုပ်ပုံ၊ Single Thread vs Multi Thread ကွာခြားချက်၊ Call Stack, Microtask Queue နှင့် Task Queue တို့ကို လက်တွေ့ဥပမာနှင့်အတူ လေ့လာပါမယ်"
date: "2026-02-12"
tags: ["javascript", "event-loop", "async", "programming"]
featured: true
image: ""
readingTime: 5
---

Event Loopအကြောင်းမပြောခင် ကျွန်တော်တို့ single-threadနဲ့ multi-thread အကြောင်း အရင်ပြောဖို့လိုပါတယ်။

## Single Thread

Single Threadဆိုတာ Tasksတွေကို တစ်ခုပြီးမှ တစ်ခု **(Sequentially)** လုပ်တာပါ။ Task Bကို Runဖို့ ရှေ့က Task Aကိုပြီးအောင် စောင့်ရပါတယ်။ တကယ်လို့ I/O operation တွေ ဒါမှမဟုတ် Network Requestတွေ ကြာနေရင် တစ်ခြားအလုပ်တွေပါ လုပ်လို့မရဘဲ ရပ်တန့်သွားတတ်ပါတယ်။ Blockဖြစ်တယ်ပေါ့ဗျာ။

**ဥပမာ** - One-way ကားလမ်းမှာ ရှေ့ကားနှေးရင် နောက်ကားတွေပါ ပိတ်မိနေသလိုမျိုးပေါ့။

---

## Multi Thread

Multi Threadဆိုတာ Multi Tasksတွေကို တပြိုင်နက် **(Parallel)** အလုပ်လုပ်နိုင်တာပါ။ Task Bကို Runဖို့ ရှေ့က Task Aကိုပြီးအောင် စောင့်စရာမလိုဘူး။ I/O Operationတွေကို Runပြီးဖို့ ဒါမှမဟုတ် အချိန်တစ်ခုလိုတဲ့ကောင်တွေပါလာပြီဆိုရင် အဲ့ကောင်တွေကို Threadသက်သက်ခွဲပြီး အလုပ်လုပ်ပါတယ်။ တစ်ချိန်တည်းမှာပဲ တစ်ခြား Tasksတွေကိုလည်း Threadတစ်ခုနဲ့ Runနေတယ်ပေါ့။

**ဥပမာ** - Three-way ကားလမ်းမှာ ကားသုံးစီး မောင်းသလိုမျိုးပါ။ ဒါပေမယ့် ပြဿနာက ကားတစ်စီးစီမှာ စားစရာ၊ သောက်စရာ၊ ပန်းကန် ဆိုပြီး ခွဲတင်လာရင်၊ ပန်းကန်တင်တဲ့ကားက နောက်ကျသွားတဲ့အခါ စားစရာတွေရောက်နေပေမယ့် ထည့်စားစရာ ပန်းကန်မရှိသေးတာမျိုး ဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် Multi-threaded စနစ်မှာ **Data Consistency and Multi Threaded Communication** တွေကို ကျကျနန စီမံတတ်ဖို့လိုပါတယ်။

---

## Event Loop

Event Loopမှာက အပိုင်းသုံးခုပါဝင်ပါတယ် -

၁။ **Call Stack**

၂။ **Microtask Queue**

၃။ **Task Queue**

ဆိုပြီး အပိုင်းသုံးပိုင်းပါဝင်ပါတယ်။

### Event Loop ဘယ်လို အလုပ်လုပ်လဲ?

JavaScript က Code တွေကို Run တဲ့အခါ Function တစ်ခုခေါ်တိုင်း **Call Stack** ထဲထည့်ပြီး **LIFO(Last In First Out)** အထာနဲ့ Execute လုပ်ပါတယ်။

အဲ့လို Execute လုပ်နေရင်းနဲ့ I/O Operation, Http Requests, setTimeout, setInterval တို့လို ကောင်တွေကို တွေ့ပြီဆိုတာနဲ့ Javascript ရဲ့ Current Thread ထဲက ထုတ်လိုက်ပြီး Browser ရဲ့ Web API မှာ Background Process အနေနဲ့သွား Run နေတာပါ။ Background Processအနေနဲ့ Run ပြီးသွားရင် သူတို့ကို Task Queueထဲ ပစ်ထည့်လိုက်တာပါ။

Promiseလိုကောင်မျိုးတွေ့ရင်ကျ သူ့မှာပါတဲ့ Callback Functionကို Microtask Queueထဲ သွားထည့်လိုက်တာ။

ဆိုတော့ Current Thread ထဲမှာ Synchronous Functionsတွေပဲကျန်ခဲ့ပြီး အရင် Execute လုပ်သွားတာပါ။

Call Stackထဲမှာရှိတဲ့ Synchronous Functionsတွေအကုန် အလုပ်လုပ်ပြီးတာနဲ့ Event Loopက Microtask Queueထဲကကောင်တွေကို FIFOအထာနဲ့ Processလုပ်ပြီး Call Stackထဲကိုထည့်ပြီး Executeလုပ်တယ်ပေါ့။

Microtask Queue ထဲကကောင်တွေအကုန် ပြီးပြီဆိုရင် Event Loop က Task Queue ထဲကကောင်တွေကို Call Stack ထဲထည့်ပြီး Execute လုပ်ပါတယ်။

---

## လက်တွေ့ ဥပမာ

```jsx
function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}

logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();
```

### Output ထွက်လာမယ့်ပုံစံ: `A -> D -> C -> B`

**ဘာကြောင့် ဒီအစီအစဉ်နဲ့ ထွက်လာလဲ?**

- **A နှင့် D:** Call Stack ထဲမှာ တန်းလုပ်သွားတဲ့ Synchronous အလုပ်တွေပါ။
- **C (Promise):** Microtask Queue ထဲမှာ ရှိနေလို့ `setTimeout` ထက် အရင်အလုပ်လုပ်ပါတယ်။
- **B (setTimeout):** သူက Task Queue ထဲမှာ ဖြစ်လို့ နောက်ဆုံးမှ ထွက်လာတာပါ။

---

## Event Loop Visualization

Event Loop ကို Visualize လုပ်ထားတဲ့ Website Linkပါ -

[JavaScript Visualizer 9000](https://www.jsv9000.app/)
