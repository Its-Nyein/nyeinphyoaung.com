---
title: "Difference between HTTP and HTTPS"
description: "Understanding the key differences between HTTP and HTTPS protocols, their security features, and when to use each"
excerpt: "Learn about HTTP and HTTPS protocols, their security differences, and why HTTPS is essential for secure web communication"
date: "2025-11-10"
tags: ["http", "https", "web", "security"]
featured: false
image: ""
readingTime: 4
---

# Difference between HTTP and HTTPS

## HTTP (Hypertext Transfer Protocol)

HTTPဟာ Client to Serverကို Communicateလုပ်ပေးတဲ့ Set of rulesတစ်ခုပါပဲ။ ဥပမာ - Clientက Websiteတစ်ခုကို Visitလုပ်လိုက်ပြီဆိုရင် Browserကနေ Serverကို Http request sentလုပ်ပါတယ်။ Clientဘက်က Httpအနေနဲ့ပဲ Requestလုပ်လိုက်တာဖြစ်တဲ့အတွက် Serverဘက်ကလည်း Httpအနေနဲ့ပဲ responseပြန်ပေးပါတယ်။ ဆိုတော့ Browser to Serverကြားက exchanged လုပ်လိုက်တဲ့ dataဟာ plain textဖြစ်နေတဲ့အတွက်ကြောင့် Attackersတွေက အလွယ်တကူ Interceptလုပ်နိုင်ပါတယ်။ ဒါကြောင့် Httpဟာ Secureမဖြစ်ဘူးလို့ ဆိုနိုင်ပါတယ်။

## HTTPS (Hypertext Transfer Protocol Secure)

HTTPရဲ့ extensionတစ်ခုပါပဲ။ Httpsဟာ Browser to Serverကြားက Request Response လုပ်လိုက်တဲ့ Dataတွေကို Transport Layer Security(TLS) and Secure Sockets Layer(SSL) Certificationsတွေကိုသုံးပြီး encryptလုပ်တဲ့အတွက်ကြောင့် Secureဖြစ်ပါတယ်။

## Summary

Summaryအနေနဲ့ Httpsကို Sensitive informationတွေကို Handleလုပ်နိုင်ဖို့အဓိကသုံးကြပါတယ်။ နောက်တစ်ခုက Httpဟာ Secureမဖြစ်တဲ့အတွက် Attackersတွေက အလွယ်တကူ Interceptလုပ်နိုင်ပြီး Paymentဆိုင်ရာ Transfer dataတွေကို အလွယ်တကူ Readလုပ်နိုင်ပြီး Httpsမှာတော့ encryptionလုပ်တဲ့အတွက် အလွယ်တကူ Readမလုပ်နိုင်ပါဘူး။

## Comparison Table

| Feature         | HTTP                  | HTTPS                          |
| --------------- | --------------------- | ------------------------------ |
| Security        | Not encrypted         | Encrypted (TLS/SSL)            |
| Port            | 80                    | 443                            |
| Data Protection | Vulnerable to attacks | Safe from interception         |
| SEO & Trust     | Lower                 | Higher (recommended by Google) |
