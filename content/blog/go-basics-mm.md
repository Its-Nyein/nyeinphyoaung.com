---
title: "Go အခြေခံများ"
description: "Go programming language ရဲ့ variables, structs, pointers မှ goroutines, channels, concurrency patterns အထိ အစအဆုံး လေ့လာနိုင်မယ့် မြန်မာဘာသာ လမ်းညွှန်"
excerpt: "Go ရဲ့ အခြေခံ syntax မှ concurrency အထိ - high-performance backend applications တည်ဆောက်ဖို့ လိုအပ်တဲ့ အရာအားလုံး"
date: "2026-01-01"
tags: ["golang", "go", "programming", "backend"]
featured: true
image: ""
readingTime: 45
---

## Golang ဆိုတာဘာလဲ?

- Go ဟာ cross-platform, open source programming language တစ်ခုဖြစ်ပါတယ်
- Go ကို high-performance applications တွေဖန်တီးရာမှာ အသုံးပြုနိုင်ပါတယ်
- Go ဟာ မြန်ဆန်ပြီး statically typed, compiled language တစ်ခုဖြစ်ပြီး သူ့ရဲ့ simplicity နဲ့ efficiency အတွက် ထင်ရှားပါတယ်
- Go ကို Google က Robert Griesemer, Rob Pike နှင့် Ken Thompson တို့က 2007 ခုနှစ်မှာ ဖန်တီးခဲ့ပါတယ်

---

## Go ကို ဘာအတွက်သုံးလဲ?

- Web development (server-side)
- Network-based programs တွေဖန်တီးခြင်း
- Cross-platform enterprise applications တွေဖန်တီးခြင်း
- Cloud-native development

---

## ဘာကြောင့် Go ကိုသုံးသင့်တာလဲ?

- Go ဟာ သင်ရလွယ်ပြီး ပျော်စရာကောင်းပါတယ်
- Go ဟာ run time နဲ့ compilation time မြန်ပါတယ်
- Go ဟာ concurrency ကို support လုပ်ပါတယ်
- Go မှာ memory management ရှိပါတယ်
- Go ဟာ platforms အမျိုးမျိုးမှာ အလုပ်လုပ်ပါတယ် (Windows, Mac, Linux, Raspberry Pi စသဖြင့်)

---

## Golang အတွက် မှတ်သားရန်

- Statically typed - Type တွေကို compile time မှာ စစ်ဆေးပါတယ်
- Compiled Language - Source code ကို machine code အဖြစ် compile လုပ်ပါတယ်
- Fast run time - Run time မြန်ဆန်ပါတယ်
- Fast compile time - Compile လုပ်ရတာ မြန်ပါတယ်
- Automatic garbage collection ရှိပါတယ်
- Classes နဲ့ objects ကို support မလုပ်ပါဘူး
- Inheritance ကို support မလုပ်ပါဘူး

---

## Go Syntax

Go program တစ်ခုမှာ အောက်ပါအပိုင်းတွေ ပါဝင်ပါတယ်-

- Package declaration
- Import packages
- Functions
- Statements နှင့် expressions

```go
package main // program တိုင်းဟာ package တစ်ခုရဲ့ အစိတ်အပိုင်းဖြစ်ပါတယ်

import "fmt" // import ကို အသုံးပြုပြီး အခြား packageတွေကို အသုံးပြုနိုင်ပါတယ်

func main() {
    fmt.Println("Hello World!")
}
```

---

## Go Variables

Go မှာ အခြေခံကျတဲ့ data types တွေရှိပါတယ်-

- `int` - integers (ကိန်းပြည့်များ) သိမ်းဆည်းပါတယ်၊ ဥပမာ 123 သို့မဟုတ် -123
- `float32` - ဒသမကိန်းတွေကို သိမ်းဆည်းပါတယ်၊ ဥပမာ 19.99 သို့မဟုတ် -19.99
- `string` - စာသားတွေကို သိမ်းဆည်းပါတယ်၊ ဥပမာ "Hello World"
- `bool` - true သို့မဟုတ် false တန်ဖိုးတွေကို သိမ်းဆည်းပါတယ်

### Variables ကြေငြာခြင်း

Go မှာ variable ကြေငြာနည်း နှစ်မျိုးရှိပါတယ်:

**၁။ `var` keyword ဖြင့်**

```go
var variablename type = value

// ဥပမာ
var name string = "John"
var age int = 25
```

> **မှတ်ချက်:** type သို့မဟုတ် value (သို့) နှစ်ခုလုံး သတ်မှတ်ပေးရပါမယ်။

**၂။ `:=` သင်္ကေတဖြင့် (Short Declaration)**

```go
variablename := value

// ဥပမာ
name := "John"
age := 25
```

> **မှတ်ချက်:** compiler က assignလုပ်လိုက်တဲ့ value အပေါ်အခြေခံပြီး type ကို သတ်မှတ်ပေးပါတယ်။ `:=` သုံးပြီး value assignမလုပ်ပဲ ကြေငြာလို့မရပါဘူး။ ကြေငြာထားပြီး မသုံးတဲ့ variableရှိရင်လည်း compile-time error ဖြစ်ပါမယ်။

### Multiple Variablesများကြေငြာခြင်း

```go
package main

import "fmt"

func main() {
    // Type နဲ့ဆိုရင် - တစ်ကြောင်းမှာ type တစ်မျိုးကိုပဲ ကြေငြာလို့ရပါတယ်
    var a, b int = 1, 3
    fmt.Println(a) // 1
    fmt.Println(b) // 3
}
```

```go
package main

import "fmt"

func main() {
    // Type မပါရင် - type မတူတာတွေကို တစ်ကြောင်းတည်းမှာ ကြေငြာလို့ရပါတယ်
    var a, b = 6, "Hello"
    fmt.Println(a) // 6
    fmt.Println(b) // Hello
}
```

---

## အမည်ပေးရန် စည်းမျဉ်းများ

- Variable name ဟာ စာလုံး သို့မဟုတ် underscore (`_`) နဲ့ စရပါမယ်
- Variable name ဟာ ဂဏန်းနဲ့ စလို့မရပါဘူး
- Variable name မှာ alpha-numeric characters နဲ့ underscores (`a-z`, `A-Z`, `0-9`, `_`) တွေ ပါနိုင်ပါတယ်
- Variable names တွေဟာ case-sensitive ဖြစ်ပါတယ် (`age`, `Age`, `AGE` ဟာ မတူညီတဲ့ variables သုံးခုဖြစ်ပါတယ်)
- Variable name အရှည် ကန့်သတ်ချက် မရှိပါဘူး
- Variable name မှာ space ပါလို့မရပါဘူး
- Go keywords တွေကို variable name အဖြစ် သုံးလို့မရပါဘူး

---

## Go Constants

```go
const CONSTNAME type = value // ပြောင်းလဲ၍မရသော read-only တန်ဖိုး
```

> **မှတ်ချက်:** Constant ကြေငြာတဲ့အခါ တန်ဖိုးကို ချက်ချင်း assign လုပ်ပေးရပါမယ်။

### Constants အမျိုးအစားများ

- Typed constants
- Untyped constants

```go
const A int = 1  // Typed constant

const A = 1      // Untyped - compiler က valueအပေါ်အခြေခံပြီး typeအလိုအလျောက်သတ်မှတ်ပေးပါတယ်
```

---

## Printf Function

`Printf()` function ဟာ formatting verbs တွေအရ argument တွေကို format လုပ်ပြီး print ထုတ်ပေးပါတယ်။

အသုံးများတဲ့ formatting verbs များ:

| Verb  | ရှင်းလင်းချက်                                  |
| ----- | ---------------------------------------------- |
| `%v`  | Default format နဲ့ value ကို print လုပ်ပါတယ်   |
| `%#v` | Go-syntax format နဲ့ value ကို print လုပ်ပါတယ် |
| `%T`  | Value ရဲ့ type ကို print လုပ်ပါတယ်             |
| `%%`  | % သင်္ကေတကို print လုပ်ပါတယ်                   |

```go
var i string = "Hello"
fmt.Printf("i has value: %v and type: %T\n", i, i)
// Output: i has value: Hello and type: string
```

---

## Integer အမျိုးအစားများ

Go မှာ signed နဲ့ unsigned integers နှစ်မျိုးစလုံးကို support လုပ်ပါတယ်:

```go
var x int = 500      // Signed integer (အပေါင်း/အနှုတ် ဖြစ်နိုင်)
var y int = -4500    // Negative signed integer
var z uint = 43      // Unsigned integer (အပေါင်းတန်ဖိုးသာ)
```

---

## Go Arrays

Arrays တွေဟာ fixed length ရှိပြီး type တူညီတဲ့ elements တွေကို သိမ်းဆည်းပါတယ်။

### Arrays ကြေငြာခြင်း

**၁။ `var` keyword ဖြင့်**

```go
var array_name = [length]datatype{values} // length သတ်မှတ်ထားခြင်း

var array_name = [...]datatype{values}    // length ကို infer လုပ်ခြင်း
```

**၂။ `:=` သင်္ကေတဖြင့်**

```go
array_name := [length]datatype{values} // length သတ်မှတ်ထားခြင်း

array_name := [...]datatype{values}    // length ကို infer လုပ်ခြင်း
```

### ဥပမာ

```go
// Length သတ်မှတ်ထားခြင်း
var arr1 = [3]int{1, 2, 3}
arr2 := [5]int{4, 5, 6, 7, 8}

// Length ကို infer လုပ်ခြင်း
var arr3 = [...]int{1, 2, 3}
arr4 := [...]int{4, 5, 6, 7, 8}
```

### Array Initialization

Array သို့မဟုတ် element တစ်ခုကို initialize မလုပ်ထားရင် default value ရပါမယ်။

> **မှတ်ချက်:** `int` အတွက် default value က `0` ဖြစ်ပြီး `string` အတွက် `""` ဖြစ်ပါတယ်။

```go
arr1 := [5]int{}             // initialize မလုပ်ထား
arr2 := [5]int{1, 2}         // တစ်စိတ်တစ်ပိုင်း initialize
str1 := [5]string{}          // initialize မလုပ်ထား

fmt.Println(arr1)  // [0 0 0 0 0]
fmt.Println(arr2)  // [1 2 0 0 0]
fmt.Println(str1)  // [    ]
```

### သတ်မှတ်ထားသော Elements များကို Initialize လုပ်ခြင်း

```go
arr1 := [5]int{1:10, 2:40}
fmt.Println(arr1) // [0 10 40 0 0]
```

### Array Length ရှာခြင်း

```go
arr1 := [4]string{"Volvo", "BMW", "Ford", "Mazda"}
arr2 := [...]int{1, 2, 3, 4, 5, 6}

fmt.Println(len(arr1)) // 4
fmt.Println(len(arr2)) // 6
```

---

## Go Slices

Slices တွေဟာ arrays နဲ့ဆင်တူပေမယ့် ပိုပြီးတော့ powerful and flexible ဖြစ်ပါတယ်။ Arrays နဲ့မတူပဲ slice ရဲ့ length ကို **Grow and Shrink(ကြီးနိုင်/ကျုံ့နိုင်)** လို့ရပါတယ်။

### Slices ဖန်တီးခြင်း

Slice ဖန်တီးနည်း အမျိုးမျိုးရှိပါတယ်:

**၁။ `[]datatype{values}` format သုံးခြင်း**

```go
slice_name := []datatype{values}
```

**၂။ Array မှ slice ဖန်တီးခြင်း**

```go
var myarray = [length]datatype{values}
myslice := myarray[start:end] // start က inclusiveဖြစ်ပြီး, end က exclusiveဖြစ်ပါတယ်
```

**၃။ `make()` function သုံးခြင်း**

```go
slice_name := make([]type, length, capacity)
```

> **မှတ်ချက်:** capacity parameter မသတ်မှတ်ရင် length နဲ့ တူပါမယ်။

### Length နှင့် Capacity

- `len()` - slice ရဲ့ length (elements အရေအတွက်) ပြန်ပေးပါတယ်
- `cap()` - slice ရဲ့ capacity (ကြီးထွားနိုင်သော elements အရေအတွက်) ပြန်ပေးပါတယ်

```go
package main

import "fmt"

func main() {
    myslice1 := []int{}
    fmt.Println(len(myslice1)) // 0
    fmt.Println(cap(myslice1)) // 0
    fmt.Println(myslice1)      // []

    myslice2 := []string{"Go", "Slices", "Are", "Powerful"}
    fmt.Println(len(myslice2)) // 4
    fmt.Println(cap(myslice2)) // 4
    fmt.Println(myslice2)      // [Go Slices Are Powerful]
}
```

### make() Function သုံးခြင်း

```go
package main

import "fmt"

func main() {
    myslice1 := make([]int, 5, 10)
    fmt.Printf("myslice1 = %v\n", myslice1)      // [0 0 0 0 0]
    fmt.Printf("length = %d\n", len(myslice1))   // 5
    fmt.Printf("capacity = %d\n", cap(myslice1)) // 10

    // Capacity မပါရင်
    myslice2 := make([]int, 5)
    fmt.Printf("myslice2 = %v\n", myslice2)      // [0 0 0 0 0]
    fmt.Printf("length = %d\n", len(myslice2))   // 5
    fmt.Printf("capacity = %d\n", cap(myslice2)) // 5
}
```

### Multidimensional Slices

```go
board := [][]string{
    {"_", "_", "_"},
    {"_", "_", "_"},
    {"_", "_", "_"},
}

// ပထမ []ဟာ row numberဖြစ်ပြီး ဒုတိယ []ဟာ column numberဖြစ်ပါတယ်
board[0][0] = "X"
board[2][2] = "O"
board[1][0] = "Z"
board[1][2] = "Z"

fmt.Println(board) // [[X _ _] [Z _ Z] [_ _ O]]
```

---

## Slices တွေကို ပြုပြင်ခြင်း

### Elements တွေကို Accessလုပ်ခြင်း

```go
prices := []int{10, 20, 30}
fmt.Println(prices[0]) // 10
fmt.Println(prices[2]) // 30
```

### Elements တွေကို ပြောင်းလဲခြင်း

```go
prices := []int{10, 20, 30}
prices[2] = 50
fmt.Println(prices[2]) // 50
```

### Elements ထည့်ခြင်း

```go
slice_name = append(slice_name, element1, element2, ...)
```

```go
package main

import "fmt"

func main() {
    myslice1 := []int{1, 2, 3, 4, 5, 6}
    fmt.Printf("myslice1 = %v\n", myslice1)       // [1 2 3 4 5 6]
    fmt.Printf("length = %d\n", len(myslice1))   // 6
    fmt.Printf("capacity = %d\n", cap(myslice1)) // 6

    myslice1 = append(myslice1, 20, 21)
    fmt.Printf("myslice1 = %v\n", myslice1)       // [1 2 3 4 5 6 20 21]
    fmt.Printf("length = %d\n", len(myslice1))   // 8
    fmt.Printf("capacity = %d\n", cap(myslice1)) // 12
}
```

### Slice တစ်ခုကို နောက်တစ်ခုနဲ့ ပေါင်းစပ်ခြင်း

```go
slice3 = append(slice1, slice2...)
```

> **မှတ်ချက်:** slice2 နောက်က `...` ဟာ **လိုအပ်** ပါတယ်။

---

## Go Conditions

### If Statement

```go
if 20 > 18 {
    fmt.Println("20 is greater than 18")
}
```

### If-Else Statement

```go
if condition {
    // condition true ဖြစ်ရင် ဒီ code run မည်
} else {
    // condition false ဖြစ်ရင် ဒီ code run မည်
}
```

### Else-If Statement

```go
if condition1 {
    // condition1 true ဖြစ်ရင် ဒီ code run မည်
} else if condition2 {
    // condition1 false, condition2 true ဖြစ်ရင် ဒီ code run မည်
} else {
    // condition1 နဲ့ condition2 နှစ်ခုလုံး false ဖြစ်ရင် ဒီ code run မည်
}
```

---

## Go Switch

`switch` statement ကို code blocks အများကြားမှ တစ်ခုကို ရွေးချယ် runဖို့ အသုံးပြုပါတယ်။

> **မှတ်ချက်:** C, C++, Java, JavaScript တို့နဲ့မတူဘဲ Go ရဲ့ switch ဟာ matched case ပဲ run ပါပါတယ်၊ `break` statement မလိုအပ်ပါဘူး။

## Single Case

```go
package main

import "fmt"

func main() {
	day := 3

	switch day {
	case 1:
		fmt.Println("Monday")
	case 2:
		fmt.Println("Tuesday")
	case 3:
		fmt.Println("Wednesday")
	case 4:
		fmt.Println("Thursday")
	...
	default:
		fmt.Println("Invalid day number")
	}
}
```

## Multi Case

```go
package main

import "fmt"

func main() {
    day := 5

    switch day {
    case 1, 3, 5:
        fmt.Println("Odd weekday")
    case 2, 4:
        fmt.Println("Even weekday")
    case 6, 7:
        fmt.Println("Weekend")
    default:
        fmt.Println("Invalid day number")
    }
}
```

---

## Go Loops

Go မှာ `for` loop **တစ်မျိုးတည်း** သာရှိပါတယ်။

### Basic For Loop

```go
for statement1; statement2; statement3 {
    // iteration တိုင်းမှာ run မည့် code
}
```

- `statement1` - loop counter value ကို initialize လုပ်မည်
- `statement2` - iteration တိုင်းမှာ evaluate လုပ်မည်။ TRUE ဆိုရင် loop ဆက်မည်။ FALSE ဆိုရင် loop ရပ်မည်။
- `statement3` - loop counter value ကို တိုးမည်

```go
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
}
// Output: 0, 1, 2, 3, 4
```

### Continue Statement

`continue` statement ကို iteration တစ်ခု (သို့မဟုတ်) အများကို Skipပြီး နောက် iteration ကိုဆက်သွားစေလိုတဲ့အခါ သုံးပါတယ်။

```go
for i := 0; i < 5; i++ {
    if i == 3 {
        continue
    }
    fmt.Println(i)
}
// Output: 0, 1, 2, 4
```

### Break Statement

`break` statement ကို loop execution ကို ရပ်တန့်စေလိုတဲ့အခါ သုံးပါတယ်။

```go
for i := 0; i < 5; i++ {
    if i == 3 {
        break
    }
    fmt.Println(i)
}
// Output: 0, 1, 2
```

### Range Keyword

`range` keyword ကို arrays, slices, maps တွေကို iterate လုပ်ဖို့ သုံးပါတယ်။ index နဲ့ value နှစ်ခုစလုံး ပြန်ပေးပါတယ်။

```go
package main

import "fmt"

func main() {
    fruits := [3]string{"apple", "orange", "banana"}

    for idx, val := range fruits {
        fmt.Printf("%v\t%v\n", idx, val)
    }
}
// Output:
// 0    apple
// 1    orange
// 2    banana
```

> **_မှတ်ချက်_** idx or valueတစ်ခုခုကို ignoreလုပ်လိုတဲ့အခါ `_` underscore သင်္ကတကို အသုံးပြုနိုင်ပါတယ်။

---

## Go Structs

Struct ဟာ data types မတူညီတဲ့ members တွေကို variable တစ်ခုထဲမှာ စုစည်းထားခြင်းဖြစ်ပါတယ်။

```go
type Person struct {
    name   string
    age    int
    job    string
    salary int
}

func main() {
    var pers1 Person

    pers1.name = "Hege"
    pers1.age = 45
    pers1.job = "Teacher"
    pers1.salary = 6000

    fmt.Println("Name:", pers1.name)
    fmt.Println("Age:", pers1.age)
    fmt.Println("Job:", pers1.job)
    fmt.Println("Salary:", pers1.salary)
}
```

---

## Go Maps

- Maps တွေဟာ data values တွေကို key:value pairs အဖြစ် သိမ်းဆည်းပါတယ်
- Map ရဲ့ element တစ်ခုချင်းစီဟာ key:value pair တစ်ခုဖြစ်ပါတယ်
- Map ဟာ unordered နဲ့ changeable collection ဖြစ်ပြီး duplicates ခွင့်မပြုပါဘူး
- Map ရဲ့ default value ဟာ `nil` ဖြစ်ပါတယ်

### Map ဖန်တီးခြင်း

```go
var a = map[KeyType]ValueType{key1:value1, key2:value2, ...}
b := map[KeyType]ValueType{key1:value1, key2:value2, ...}
```

```go
package main

import "fmt"

func main() {
    var a = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964"}
    b := map[string]int{"Oslo": 1, "Bergen": 2, "Trondheim": 3}

    fmt.Printf("a\t%v\n", a)
    fmt.Printf("b\t%v\n", b)
}
```

### make Function ဖြင့် Map ဖန်တီးခြင်း

```go
var a = make(map[KeyType]ValueType)
b := make(map[KeyType]ValueType)
```

```go
var a = make(map[string]string)
a["brand"] = "Ford"

b := make(map[string]int)
b["Oslo"] = 1
```

> **သတိပေးချက်:** ဒီနေရာမှာ Empty map ဖန်တီးရန် `make()` function ဟာ အကောင်းဆုံး(အမှန်ကန်ဆုံး) နည်းလမ်းဖြစ်ပါတယ်။ တခြားနည်းနဲ့ empty map ဖန်တီးပြီး write လုပ်မယ်ဆိုရင် runtime panic ဖြစ်နိုင်ပါတယ်။

### Key ရှိမရှိ စစ်ဆေးခြင်း

```go
val, ok := map_name[key]
```

```go
var a = map[string]string{"brand": "Ford", "model": "Mustang"}

val1, ok1 := a["brand"] // ရှိတဲ့ key စစ်ဆေးခြင်း
val2, ok2 := a["color"] // မရှိတဲ့ key စစ်ဆေးခြင်း

fmt.Println(val1, ok1) // Ford true
fmt.Println(val2, ok2) //  false
```

### Go မှာ Map တွေဟာ Reference types တွေ ဖြစ်ပါတယ်။

> အဓိကအချက်: Map variable နှစ်ခုဟာ တူညီတဲ့ Hash Table (memory location) တစ်ခုတည်းကို Referလုပ်ခဲ့ရင် Variable တစ်ခုကို ပြင်လိုက်တာနဲ့ နောက်တစ်ခုမှာပါ အလိုအလျောက် လိုက်ပြောင်းသွားပါလိမ့်မယ်။

```go
package main

import "fmt"

func main() {
	a := map[string]string{
		"brand": "Ford",
		"model": "Mustang",
		"year":  "1964",
	}

	b := a // b references the same map as a

	fmt.Println(a)
	fmt.Println(b)

	b["year"] = "1970"
	fmt.Println("After change to b:")

	fmt.Println(a)
	fmt.Println(b)
}
// Output:
// map[brand:Ford model:Mustang year:1964]
// map[brand:Ford model:Mustang year:1964]
// After change to b:
// map[brand:Ford model:Mustang year:1970]
// map[brand:Ford model:Mustang year:1970]
```

---

## Go Pointers

**Pointer** ဆိုတာ တန်ဖိုး (Value) ကို တိုက်ရိုက်သိမ်းတာမဟုတ်ဘဲ အခြား variable တစ်ခုရဲ့ Memory Address (မှတ်ဉာဏ်လိပ်စာ) ကို သိမ်းဆည်းထားတဲ့ variable ဖြစ်ပါတယ်။

### Pointer မပါဘဲ

```go
x := 10
y := x   // y ဟာ x ရဲ့ copy ဖြစ်ပါတယ်
y = 20

fmt.Println("x:", x) // 10 - မပြောင်းပါ
fmt.Println("y:", y) // 20
```

### Pointer ပါရင်

```go
x := 10
p := &x  // p ဟာ x ကို point လုပ်ပါတယ်
*p = 20  // p point လုပ်ထားတဲ့ address ရဲ့ value ကို ပြောင်းမည်

fmt.Println("x:", x) // 20 - ပြောင်းသွားပါလိမ့်မယ်
```

- `&x` - `x` ရဲ့ **memory address** ကို ပေးပါတယ် (pointer)
- `p := &x` - `p` ဟာ `x` ကို point လုပ်တဲ့ pointer ဖြစ်ပါတယ်
- `*p` - "p point လုပ်ထားတဲ့ memory address ကို သွားပြီး"
- `*p = 20` - "အဲ့ address ရဲ့ value ကို 20 အဖြစ် ပြောင်းလိုက်ပါဆိုတဲ့ အဓိပ္ပာယ်ပါပဲ"

### Functions မှာ Pointers သုံးခြင်း

```go
func addOne(n *int) {
    *n = *n + 1
}

func main() {
    x := 5
    addOne(&x)
    fmt.Println("x after addOne:", x) // 6
}
```

---

## Receiver Functions

Receiver functions တွေဟာ custom types (structs) တွေအတွက် dot (`.`) notation နဲ့ method လို သုံးနိုင်အောင် လုပ်ပေးပါတယ်။
တခြား language တွေမှာ class method သုံးသလိုပဲ Go မှာလည်း struct နဲ့ method ကို တွဲသုံးနိုင်ပါတယ်။

### ၁။ Pointer Receiver

**_Pointer Receiver_** ဟာ Structတစ်ခုလုံးကို Copyမကူးပဲ Existing Structureပေါ်မှာပဲ Operateလုပ်နိုင်ပါတယ်။ ဒါကြောင့်ပဲ မူလ Struct ထဲက တန်ဖိုးတွေကို တိုက်ရိုက် Modifyလုပ်နိုင်ပါတယ်။
အားသာချက်ကတော့ Copyကူးစရာမလိုပဲ မူလ Existing Structပေါ်မှာပဲ အလုပ်လုပ်နိုင်တော့ Memoryသက်သာတာပေါ့ဗျာ။

```go
type Coordinate struct {
    X int
    Y int
}

func (coord *Coordinate) shiftBy(x, y int) {
    coord.X += x
    coord.Y += y
}

func main() {
    coord := Coordinate{10, 10}
    coord.shiftBy(1, 1) // dot notation နဲ့ modify လုပ်မည်
}
```

### ၂။ Value Receiver

**_Value Receiver_** ကတော့ မူလ Structကို Copyကူးပြီး အဲ့ဒီ Copyပေါ်မှာပဲ Operateလုပ်တဲ့အတွက် မူလဒေတာတွေကို မတော်တဆ မှားယွင်းပြင်ဆင်မိမှာ စိုးရိပ်စရာမလိုဘူးပေါ့ဗျာ။ Immutable logicဆန်သွားတာပေါ့။

```go
package main

type Coordinate struct {
	X int
	Y int
}

func (c Coordinate) shiftBy(other Coordinate) Coordinate {
	return Coordinate{other.X - c.X, other.Y - c.Y}
}

func main() {
	coord1 := Coordinate{2, 2}
	coord2 := Coordinate{1, 5}

	shiftedCoord := coord1.shiftBy(coord2)
	println("Shifted Coordinate:", shiftedCoord.X, shiftedCoord.Y) // (-1, 3)
}
```

### Recap

- **Receiver functions** ကိုတော့ Clean and Convenientဖြစ်တဲ့ APIsတွေကို ဖန်တီးတဲ့အခါ အသုံးများပါတယ်
- ကျွန်တော်ကတော့ **Pointer Receiver** ကို ပိုပြီး အသုံးများပါတယ်။ **Value Receiver** ကိုတော့ အရမ်းမသုံးဖြစ်ပါဘူး။

---

## Iota

`iota` keyword ကို constants တွေကို auto value assign လုပ်လိုတဲ့အခါ အသုံးပြုပါတယ်။

- **Auto increment:** `iota` ဟာ constant တစ်ခုချင်းစီအတွက် 1 စီ တိုးပါတယ်
- **Zero-based:** ပထမ constant မှာ 0 ကနေ စပါတယ်
- **Reset:** `const` block အသစ်တိုင်းမှာ 0 ကနေ ပြန်စပါတယ်

```go
const (
    A = iota // A = 0
    B        // B = 1
    C        // C = 2
    D        // D = 3
)
```

### Values ကျော်ခြင်း (Using underscore)

```go
const (
    A = iota // A = 0
    _        // 1 (ကျော်မည်)
    _        // 2 (ကျော်မည်)
    D        // D = 3
)
```

---

## Variadics

Variadic functions တွေဟာ parameters အရေအတွက် မကန့်သတ်ပဲ လက်ခံနိုင်ပါတယ်။

```go
func sum(nums ...int) int { // variadic parameter ဟာ slice ဖြစ်ပါတယ်
    result := 0
    for _, num := range nums {
        result += num
    }
    return result
}

func main() {
    a := []int{1, 2, 3}
    b := []int{4, 5, 6}
    all := append(a, b...)
    answer := sum(all...)
    fmt.Println("The sum of all numbers is:", answer) // 21
}
```

---

## Init Functions

`init()` function ဟာ initialization steps အတွက် သုံးပြီး `main()` function မတိုင်ခင် run ပါတယ်။

> **_အသုံးပြုမှု_** Network connection checkလိုတဲ့အခါ၊ တစ်ချို့ validations တွေကို ကြိုတင် စစ်ဆေးလိုတဲ့အခါ၊​ Db connection and Cache expensiveတွေလိုမျိုးမှာ အသုံးပြုပါတယ်။

```go
var EmailExpr *regexp.Regexp

func init() {
    compiled, err := regexp.Compile(`.+@.+\..+`)
    if err != nil {
        panic("failed to compile email regex")
    }
    EmailExpr = compiled
    fmt.Println("Email regex compiled successfully")
}
```

---

## Error Handling

- Errors တွေကို function ရဲ့ **နောက်ဆုံး** return value အဖြစ် ပြန်ပေးပါတယ်
- `errors.New()` ကို simple errors ဖန်တီးဖို့ သုံးပါတယ်
- Error return တဲ့ functions တွေအတွက် `if err != nil` အမြဲစစ်ဆေးဖို့လိုပါတယ်

```go
type error interface {
    Error() string
}
```

---

## Readers and Writers(Go I/O)

**_Readers နဲ့ Writers_** ဟာ I/O sources တွေကို reading နဲ့ writing လုပ်ဖို့ အခြေခံကျတဲ့ interfacesတွေဖြစ်ပါတယ်။
Readers တွေက low-level implementation ဖြစ်ပြီး အများအားဖြင့် bufio package ကို အသုံးပြုပြီး buffer management ကို လျော့ချကာ အသုံးပြုပါတယ်

### Reader Interface

```go
type Reader interface {
	Read(p []byte) (n int, err error)
}
```

> `Read()` function က provided buffer p ကို fill လုပ်ပြီး n → read လုပ်နိုင်သည့် bytes အရေအတွက်ကို returnပြန်ပေးပါတယ်။ Bytesအားလုံးကို read လုပ်ပြီးပြီဆိုတာနဲ့ err == io.EOFဖြစ်ပါလိမ့်မယ်။ EOFဆိုတာ End of lineပါ။

```go
package main

import (
	"fmt"
	"io"
	"strings"
)

func main() {
	reader := strings.NewReader("SAMPLE")
	var newString strings.Builder
	buffer := make([]byte, 4)

	for {
		n, err := reader.Read(buffer)
		chunk := buffer[:n]
		newString.Write(chunk)

		fmt.Printf("Read %v bytes %q\n", n, chunk)
		if err == io.EOF {
			break
		}
	}

	fmt.Printf("Final string: %q\n", newString.String())
}
// Output:
// Read 4 bytes "SAMP"
// Read 2 bytes "LE"
// Read 0 bytes ""
// Final string: "SAMPLE"
```

### bufio package

`bufio` packageကတော့ buffers or construct data တွေကို မိမိကိုယ်တိုင် manageလုပ်စရာမလိုပဲ ReadString('\n') လို function တွေ အသုံးပြုပြီး Read & Write buffering processes တွေကို provideလုပ်ပေးပါတယ်။

```go
package main

import (
	"bufio"
	"fmt"
	"io"
	"strings"
)

func main() {
	reader := strings.NewReader("SAMPLE")
	buffered := bufio.NewReader(reader)

	text, err := buffered.ReadString('\n')
	if err == io.EOF {
		fmt.Println(text)
	} else {
		fmt.Println("Something went wrong")
	}
}
```

### Writer Interface

`Writer interface` က Reader နဲ့ symmetric ဖြစ်ပါတယ်။

```go
package main

import (
	"bytes"
	"fmt"
)

func main() {
	buffer := bytes.NewBufferString("")
	n, err := buffer.WriteString("SAMPLE")
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("Wrote %v bytes: %q\n", n, buffer)
	}
}
```

---

## Type Embedding

Go မှာ အခြား language တွေလို Class Inheritance မရှိပေမယ့် Embedding နဲ့ အလားတူ လုပ်ဆောင်ချက်မျိုး လုပ်ဆောင်နိုင်ပါတယ်။

### ၁။ Embedding Interfaces

Interface တစ်ခုထဲမှာ အခြား interface တွေကို ထည့်သွင်းလိုက်ခြင်းဖြင့် Embedding interfacesတွေတည်ဆောက်နိုင်ပါတယ်။

> **_အားသာချက်_**: ကုဒ်တွေ ထပ်ခါတလဲလဲ ရေးစရာမလိုတော့ပဲ interface အကြီးကြီးတွေကို အစိတ်အပိုင်းလေးတွေနဲ့ စုစည်းနိုင်ပါတယ်။ Codebase တွေကို maintainလုပ်ရာမှာလည်း အင်မတန်လွယ်ကူစေပါတယ်။

```go
package main

import "fmt"

type Whisperer interface {
	Whisper() string
}

type Yeller interface {
	Yell() string
}

type Embedded interface {
	Whisperer
	Yeller
}

func Talk(e Embedded) {
	fmt.Println(e.Whisper())
	fmt.Println(e.Yell())
}
```

### ၂။ Embedding Structs

အလားတူပါပဲ Structs တစ်ခုထဲမှာ အခြား structs တွေကို ထည့်သွင်းလိုက်ခြင်းဖြင့် Embedding structsတွေတည်ဆောက်နိုင်ပါတယ်။

> **_Embedding Structs_** ရဲ့ထူးခြားချက်ကတော့ field & method promotion လို့ခေါ်တဲ့ top-level struct မှာ direct access လုပ်နိုင်ပြီး extra indirection မလိုခြင်းပါပဲ။

```go
package main

import "fmt"

type Account struct {
	AccountId int
	Balance   int
	Name      string
}

type AccountManager struct {
	Account
}

func main() {
	account := AccountManager{Account{2, 1000, "John"}}
	fmt.Println("Account:", account)
    // No need to extra indirection `account.Account.Name`
	fmt.Println("Name via embedded struct:", account.Name) // (field promotion)
}
```

---

## Generics

**_Generics_** တွေက function တစ်ခုကို data types အမျိုးမျိုးအတွက် handle လုပ်နိုင်ပြီး code duplication ကိုလည်း လျှော့ချနိုင်ပါတယ်။ `constraints` interfaces  တွေကို အသုံးပြုပြီး Generics တွေကို defineလုပ်နိုင်ပါတယ်။

```go
func IsEqual[T comparable](a, b T) bool { // comparable is constraints
    return a == b
}

func main() {
    fmt.Println(IsEqual(2, 2))         // true
    fmt.Println(IsEqual("far", "boo")) // false
    fmt.Println(IsEqual('a', 'b'))     // false
	fmt.Println(IsEqual[uint8](4, 4))  // true
}
```

### Constraint ဖန်တီးခြင်း

```go
type Integer32 interface {
    int32 | uint32
}

func SumNumbers[T Integer32](arr []T) T { // Integer32 is constraints
    var sum T
    for i := 0; i < len(arr); i++ {
        sum += arr[i]
    }
    return sum
}
```

> **_မှတ်ချက်_**: Generic constraints တွေနဲ့အလုပ်လုပ်တဲ့အခါမှာ typesတွေဟာ exactly match ဖြစ်ရပါမယ်။ တစ်ခါတစ်လေ Genericသုံးတဲ့အခါ typesတွေ matchမဖြစ်ပဲ compile errorတွေတက်တဲ့အခါ `generic approximation`လို့ခေါ်တဲ့ `~`လေးနဲ့ ဖြေရှင်းရင် အဆင်ပြေတတ်ကြပါတယ်။

---

## Function Literals

- Function literals (closures/anonymous functions) ဟာ function တစ်ခုထဲမှာ function တစ်ခုကို define လုပ်နိုင်ပါတယ်။
- Function literals တွေကို variables တွေထဲမှာ assign လုပ်လို့ရပါတယ်။
- Function literals တွေကို functions တွေထဲမှာ parameter အနေနဲ့လည်း passလုပ်လို့ရပါတယ်။

```go
func helloWorld() {
    fmt.Println("Hello,")
    world := func() { // anonymous function
        fmt.Println("World!")
    }
    world()
}
```

### Closure

Closure ဟာ function တစ်ခုက သူ့အပြင် scope ထဲမှာရှိတဲ့ variable ကို **_မှတ်ထားပြီး_** အသုံးပြုနိုင်ပါတယ်။

```go
package main

import "fmt"

func main() {
	discount := 0.0 // value outside anonymous function (outer scope)

	calcDiscount := func(subTotal float64) float64 {
		if subTotal > 100 {
			discount += 0.1
		}
		if subTotal > 300 {
			discount += 0.3
		}
		return discount
	}

	fmt.Println(calcDiscount(50))   // 0
	fmt.Println(calcDiscount(150))  // 0.1
	fmt.Println(calcDiscount(400))  // 0.5
}
```

---

## Defer

`defer` keyword ဟာ function ပြီးဆုံးပြီးနောက် code ကို execute လုပ်ပါတယ်။ Cleanup operations အတွက် အတော်လေး အသုံးဝင်ပါတယ်။

> **မှတ်ချက်:** `defer` statements တွေဟာ LIFO (Last In, First Out) order နဲ့ execute လုပ်ပါတယ်။

```go
package main

import "fmt"

func main() {
	fmt.Println("Function beginning")

	defer fmt.Println("one")
	defer fmt.Println("two")

	fmt.Println("Function End")
}

// Output:
// Function beginning
// Function End
// Two
// One
```

---

# Concurrency

Concurrency ဟာ Go ရဲ့ အစွမ်းထက်ဆုံး feature တစ်ခုဖြစ်ပြီး အခြား programming languages တွေနဲ့ မတူအောင် ကွဲပြားစေပါတယ်။ ဒီအပိုင်းမှာ Go ရဲ့ concurrent programming အကြောင်း အားလုံးကို လေ့လာပါမယ်။

## Concurrency ဆိုတာ ဘာလဲ?

ပုံမှန်အားဖြင့် ကျွန်တော်တို့ code တွေဟာ တစ်ကြောင်းပြီးမှတစ်ကြောင်း အစဉ်လိုက် run ပါတယ် ဒါကို Sequential လို့ ခေါ်ပါတယ်။ **Concurrency** က code အပိုင်းများစွာကို တစ်ချိန်တည်းမှာ စီမံခန့်ခွဲပြီး အလှည့်ကျ အလုပ်လုပ်နိုင်စေခြင်း ဖြစ်ပါတယ်။

ဥပမာ - စားသောက်ဆိုင် မီးဖိုချောင်ကို စဉ်းစားကြည့်ပါ:

- **_Concurrency မပါဘဲ (Sequential):_** စားဖိုမှူးတစ်ယောက်တည်းက appetizer ချက်ပြီးမှ main course ချက်၊ main course ပြီးမှ dessert လုပ်တာမျိုးပါ။ တစ်ခုပြီးမှ တစ်ခုလုပ်ရလို့ ဧည့်သည်တွေ အရမ်းကြာကြာ စောင့်ရပါတယ်။

- **_Concurrency နဲ့:_** စားဖိုမှူး တစ်ယောက်တည်းကပဲ မီးဖို ၃ ခုမှာ တစ်ပြိုင်တည်း ချက်နေတာမျိုးပါ။ အသားကျက်အောင်စောင့်နေတုန်း အသီးအရွက်လှီးတယ်၊ အသီးအရွက်နွမ်းအောင်စောင့်တုန်း ဟင်းရည်မွှေတယ်။ အလုပ်တွေအများကြီးကို တစ်ပြိုင်တည်း "ကိုင်တွယ်" နေတာမျိုးပါ။

- **_Parallelism_**: စားဖိုမှူး ၃ ယောက်က မီးဖို ၃ ခုမှာ တစ်ယောက်စီ တစ်ပြိုင်တည်း ချက်တာမျိုးပါ။ ဒါကတော့ အလုပ်တွေကို တစ်ပြိုင်တည်း "တကယ်အလုပ်လုပ်" နေတာဖြစ်ပါတယ်။

### Concurrent Code အမျိုးအစား နှစ်မျိုး

| အမျိုးအစား              | ရှင်းလင်းချက်                                                                     | လက်တွေ့ ဥပမာ                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Asynchronous**        | Code ဟာ ခနရပ်နားပြီး ပြန်runနိုင်ပါတယ်၊ ရပ်နေစဉ် အခြား codeကိုလည်း run နိုင်ပါတယ် | စားဖိုမှူးတစ်ယောက်က ရေနွေဆူအောင်တည်ထားပြီး စောင့်နေစဉ်အတွင်း ဟင်းသီးဟင်းရွက်တွေလှီး တစ်ခြားလိုအပ်တာတွေလုပ်နေတာမျိုးပေါ့ |
| **Threaded (Parallel)** | CPU cores များစွာမှာ အပြိုင် run ပါတယ်                                            | စားဖိုမှူးများစွာက တစ်ချိန်တည်း ချက်ပြုတ်နေတဲ့ ပုံစံမျိုးပေါ့ဗျာ                                                        |

> **မှတ်ချက်:** Go က အခြေအနေပေါ်မူတည်ပြီး အကောင်းဆုံး concurrency method ကို အလိုအလျောက် ရွေးချယ်ပေးပါတယ်!

**_Thread Execution_**
![thread-execution](/blog/go-thread-execution.png)

**_Async Execution_**
![async-execution](/blog/go-async-execution.png)

---

## Goroutines

**Goroutines** တွေဟာ Go ရဲ့ functions တွေကို concurrently run နိုင်အောင် လုပ်ဆောင်ပေးတဲ့ နည်းလမ်းဖြစ်ပါတယ်။ Go runtime က manage လုပ်တဲ့ lightweight threads တွေဖြစ်ပါတယ်။

OS Threads တွေက များသောအားဖြင့် memory 1MB ကျော်လောက် ယူတတ်ပေမယ့် Goroutine တစ်ခုဟာ 2KB ဝန်းကျင်လောက်ပဲ စတင်အသုံးပြုပါတယ်။ ဒါကြောင့် Go program တစ်ခုထဲမှာ Goroutines ပေါင်း သောင်းနဲ့ချီပြီး တစ်ပြိုင်နက် run နိုင်တာဖြစ်ပါတယ်။

ဥပမာ - ဖိုင်ကြီး ၅ ခု ဒေါင်းလုဒ်ဆွဲဖို့ လိုတယ်ဆိုပါစို့ဗျာ-

```go
// Goroutines မပါဘဲ - တစ်ခုပြီးမှ တစ်ခု ဒေါင်းလုဒ်ဆွဲတယ် (နှေးပါတယ်!)
download("file1.zip") // ၁၀ စက္ကန့် စောင့်
download("file2.zip") // ၁၀ စက္ကန့် စောင့်
download("file3.zip") // ၁၀ စက္ကန့် စောင့်
// စုစုပေါင်း: ၃၀+ စက္ကန့်
```

```go
// Goroutines နဲ့ - အားလုံး တစ်ပြိုင်နက် ဒေါင်းလုဒ်ဆွဲတယ် (မြန်ပါတယ်!)
go download("file1.zip") // ချက်ချင်း စတင်
go download("file2.zip") // ချက်ချင်း စတင်
go download("file3.zip") // ချက်ချင်း စတင်
// စုစုပေါင်း: ~၁၀ စက္ကန့် (အားလုံး အတူတူ ဒေါင်းလုဒ်)
```

### Goroutine ဖန်တီးခြင်း

Function call ရှေ့မှာ `go` keyword ထည့်လိုက်ရုံပါပဲ။

```go
package main

import (
    "fmt"
    "time"
)

func count(name string, amount int) {
    for i := 1; i <= amount; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Printf("%s: %d\n", name, i)
    }
}

func main() {
    // Goroutine စတင် - concurrently run ပါတယ်
    go count("Goroutine", 5)

    fmt.Println("Main: Waiting for goroutine...")

    // Goroutines တွေ ပြီးအောင် စောင့်ပါ
    time.Sleep(1000 * time.Millisecond)
    fmt.Println("Main: Program ended!")
}
```

> **အရေးကြီး:** Main function ပြီးဆုံးသွားရင် goroutines အားလုံး ချက်ချင်း ရပ်တန့်သွားပါမယ်! ဒါကြောင့် သူတို့ကို စောင့်ဖို့ `time.Sleep` ကိုသုံးကြပါတယ်။ Real Projects တွေမှာတော့ `time.Sleep`အစား အဲ့ထက်ပိုပြီး စနစ်ကျတဲ့ `channels`တို့ `wait groups`တို့ကို အသုံးပြုကြပါတယ်။ ဘာလို့လဲဆိုတော့ အလုပ်က ဘယ်လောက်ကြာမယ်ဆိုတာ အတိအကျ မသိနိုင်လို့ပါ။

---

## Channels

**Channels** တွေဟာ goroutines တွေအချင်းချင်း လုံခြုံစွာ ဆက်သွယ်နိုင်အောင် လုပ်ဆောင်ပေးတဲ့ pipes တွေဖြစ်ပါတယ်။ **_"Don't communicate by sharing memory; share memory by communicating"_** (Memory ကို မျှသုံးပြီး ဆက်သွယ်မည့်အစား၊ ဆက်သွယ်ခြင်းဖြင့်သာ Memory ကို မျှဝေပါ) ဆိုတဲ့ Go ရဲ့ ဒဿနကို အကောင်အထည်ဖော်ထားတာ ဖြစ်ပါတယ်။ Concurrent code တွေကြားမှာ messages (ပို့/လက်ခံ တစ်နည်းအားဖြင့် send/write end & receive/read end) နိုင်တဲ့ နည်းလမ်းလို့ မြင်ကြည့်ပါ။

ဥပမာ - ကားစက်ရုံ assembly line ကို စဉ်းစားကြည့်ပါ:

- **Station 1** က frame ဆောက်ပြီး → **Channel** ကို ပို့ → **Station 2** က လက်ခံ
- **Station 2** က engine တပ်ပြီး → **Channel** ကို ပို့ → **Station 3** က လက်ခံ
- Station တစ်ခုချင်းစီက ရှေ့က station ကနေ channel မှတဆင့် ဒေတာရောက်လာမယ့်အချိန်ကို စောင့်ပါတယ်။

**_Channel Visual_**
![channel-visual](/blog/go-channel-visual.png)

### Channels ဖန်တီးပြီး အသုံးပြုခြင်း

```go
package main

import "fmt"

func main() {
    // channel တစ်ခုဖန်တီးခြင်း
    messages := make(chan string)

    go func() {
        messages <- "Hello from goroutine!" // Channel ကိုပို့ခြင်း(Send)
    }()

    msg := <-messages // Channel ကနေလက်ခံခြင်း(Receive)
    fmt.Println(msg)  // Output: Hello from goroutine!
}
```

### Channel Syntax

```go
// Channel ဖန်တီးခြင်း
ch := make(chan int)

// Channel ကို value ပို့ခြင်း
ch <- 42

// Channel ကနေ value လက်ခံခြင်း
value := <-ch
```

### Buffered နှင့် Unbuffered Channels

| အမျိုးအစား     | အပြုအမူ                                                                            | ဘယ်အချိန် သုံးမလဲ                      |
| -------------- | ---------------------------------------------------------------------------------- | -------------------------------------- |
| **Unbuffered** | Sender နှင့် Receiver တစ်ပြိုင်နက် အဆင်သင့်ဖြစ်မှ အလုပ်လုပ်ခြင်း (Synchronization) | ဒေတာရောက်ရှိကြောင်း သေချာချင်တဲ့အခါ    |
| **Buffered**   | သတ်မှတ်ထားသော Capacity အထိ Block မဖြစ်ပဲ ဒေတာပို့နိုင်ခြင်း                        | Performance နှင့် Batch အလုပ်များအတွက် |

```go
// Unbuffered channel - receive မလုပ်ခင် block ဖြစ်ပါတယ်
// ဆိုလိုတာက Receiver ရှိမှ ပို့လို့ရမယ်ဆိုတဲ့ ပုံစံမျိုးပါ
unbuffered := make(chan int)

// Buffered channel - block မဖြစ်ခင် values ၃ ခု ထိန်းထားနိုင်ပြီး
// ၄ ခုမြောက်မှ Sender ဘက်က Block ဖြစ်မည်
buffered := make(chan int, 3)

buffered <- 1 // Block မဖြစ်
buffered <- 2 // Block မဖြစ်
buffered <- 3 // Block မဖြစ်
buffered <- 4 // BLOCK ဖြစ်ပါပြီ! Buffer ပြည့်သွားပြီ
```

> **မှတ်ချက်:** Channels ထဲက messages တွေဟာ FIFO (First In, First Out) အစီအစဉ်အတိုင်း ဖြစ်ပါတယ်။

### Channel Selection

`select` keyword က channels အများကို တစ်ပြိုင်နက် ကိုင်တွယ်နိုင်စေပါတယ်-

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(100 * time.Millisecond)
        ch1 <- "Channel 1 ကနေ message"
    }()

    go func() {
        time.Sleep(200 * time.Millisecond)
        ch2 <- "Channel 2 ကနေ message"
    }()

    // Channel တစ်ခုခုကနေ messages စောင့်
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }
}
```

### Channels နဲ့ Timeouts

`time.After` ကို `select` နဲ့ တွဲသုံးပြီး timeouts implement လုပ်နိုင်ပါတယ်-

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)

    go func() {
        time.Sleep(2 * time.Second) // နှေးတဲ့ operation simulate
        ch <- "Result ready!"
    }()

    select {
    case result := <-ch:
        fmt.Println(result)
    case <-time.After(1 * time.Second):
        fmt.Println("Timeout! Operation အရမ်းကြာလွန်းတယ်။")
    }
}
// Output: Timeout! Operation အရမ်းကြာလွန်းတယ်။
```

---

## Synchronization

Goroutines အများစုက Shared Data (Variable တစ်ခုတည်း)ကို တစ်ပြိုင်နက် access လုပ်တဲ့အခါ ရှုပ်ထွေးနိုင်ပြီး Race Conditionကြောင့် မလိုလားအပ်တဲ့ ပြဿနာတွေဖြစ်တတ်ပါတယ်။ **Synchronization** က bugs နဲ့ မမှန်းဆနိုင်တဲ့ အပြုအမူတွေကို ကာကွယ်ပေးပါတယ်။

ဥပမာ - လူနှစ်ယောက် တစ်ပြိုင်နက် ဘဏ်အကောင့်တစ်ခုတည်းကနေ ငွေထုတ်မယ်ဆိုပါစို့-

- အကောင့်လက်ကျန်: `$100`
- A က `$80` ထုတ်ချင်
- B က `$50` ထုတ်ချင်

Synchronization မပါဘဲ-

1. နှစ်ယောက်လုံး လက်ကျန်စစ်: `$100` ✓
2. နှစ်ယောက်လုံး ထုတ်လိုက်ရင်
3. ရလဒ်: `-$30` လက်ကျန်! 💥

Synchronization နဲ့-

1. A က အကောင့် lock လုပ်၊ `$100` စစ်၊ `$80` ထုတ်၊ unlock
2. B က အကောင့် lock လုပ်၊ `$20` စစ်၊ ငွေမလုံလောက် ✓

### Mutex (Mutual Exclusion)

**Mutex** က data ကို lock/unlock လုပ်ပြီး goroutine တစ်ခုတည်းသာ access လုပ်နိုင်အောင် လုပ်ဆောင်ပေးပါတယ်။

```go
package main

import (
    "fmt"
    "sync"
)

type BankAccount struct {
    balance int
    mutex   sync.Mutex
}

func (acc *BankAccount) Deposit(amount int) {
    // Lock လုပ်ပြီး တခြား goroutines မဝင်နိုင်အောင် ကာကွယ်ထားပါတယ်
    acc.mutex.Lock()
    defer acc.mutex.Unlock() // Function ပြီးရင် Unlock

    acc.balance += amount
    fmt.Printf("ငွေသွင်း %d, လက်ကျန်: %d\n", amount, acc.balance)
}

func (acc *BankAccount) Withdraw(amount int) bool {
    acc.mutex.Lock()
    defer acc.mutex.Unlock()

    if acc.balance >= amount {
        acc.balance -= amount
        fmt.Printf("ငွေထုတ် %d, လက်ကျန်: %d\n", amount, acc.balance)
        return true
    }
    fmt.Printf("ငွေမလုံလောက် %d အတွက်, လက်ကျန်: %d\n", amount, acc.balance)
    return false
}

func main() {
    account := &BankAccount{balance: 100}

    var wg sync.WaitGroup

    // Concurrent transactions simulate
    wg.Add(3)
    go func() { defer wg.Done(); account.Deposit(50) }()
    go func() { defer wg.Done(); account.Withdraw(80) }()
    go func() { defer wg.Done(); account.Withdraw(50) }()

    wg.Wait()
    fmt.Println("နောက်ဆုံး လက်ကျန်:", account.balance)
}
```

### Mutex နဲ့ Defer ဘာကြောင့် သုံးသင့်လဲ?

`defer` ကို အသုံးပြုခြင်းဖြင့် mutex ကို အမြဲ unlock ဖြစ်အောင် သေချာစေနိုင်ပါတယ်။

**`defer` မပါဘဲ - အန္တရာယ်ရှိနိုင်-**

```go
func (d *SyncData) Get(k string) int {
    d.mutex.Lock()
    if k == "" {
        return 0 // ❌ Unlock မေ့သွားပြီး Mutex ထာဝရ lock ဖြစ်နေမယ်!
    }
    value := d.inner[k]
    d.mutex.Unlock()
    return value
}
```

**`defer` ပါရင် - ဘေးကင်းစေနိုင်-**

```go
func (d *SyncData) Get(k string) int {
    d.mutex.Lock()
    defer d.mutex.Unlock() // Function ဘယ်လို ပြီးဆုံးပြီးဆုံး အမြဲ unlock ဖြစ်မယ်

    if k == "" {
        return 0 // ဒါဆို unlock ဖြစ်ပါသေးတယ်!
    }
    return d.inner[k]
}
```

### Wait Groups

**Wait Groups** က goroutines အကုန်လုံးကို ပြီးဆုံးအောင် စောင့်နိုင်စေပါတယ်။

ဥပမာ - Team project တစ်ခုကို စဉ်းစားကြည့်ပါ လူ ၅ ယောက်က အပိုင်းချင်း မတူဘဲ လုပ်ကြတယ်:

- အားလုံးကို tasks ချပေးတယ်
- Team members အားလုံး ပြီးအောင် စောင့်တယ်
- ပြီးမှသာ project submit လုပ်နိုင်တယ်

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    // အလုပ်တစ်ခုပြီးဆုံးကြောင်း counter ကို အကြောင်းကြား
    defer wg.Done()

    fmt.Printf("Worker %d စတင်နေပါပြီ\n", id)
    time.Sleep(time.Duration(id) * 100 * time.Millisecond)
    fmt.Printf("Worker %d ပြီးဆုံးပါပြီ\n", id)
}

func main() {
    var wg sync.WaitGroup

    for i := 1; i <= 5; i++ {
        wg.Add(1)        // စောင့်ရမယ့် task တစ်ခု ထည့်
        go worker(i, &wg)
    }

    // Counter သုညဖြစ်သည်အထိ (အလုပ်အားလုံးပြီးသည်အထိ) ရပ်စောင့်ခြင်း
    wg.Wait()
    fmt.Println("Workers အားလုံး ပြီးဆုံးပါပြီ!")
}
```

**ဘယ်လို အလုပ်လုပ်လဲ:**

| Method      | ရှင်းလင်းချက်                                                            |
| ----------- | ------------------------------------------------------------------------ |
| `wg.Add(n)` | စောင့်ရမည့် goroutines အရေအတွက် n ခုကို counter တွင် ထည့်ခြင်း           |
| `wg.Done()` | အလုပ်တစ်ခု ပြီးဆုံးကြောင်း signal ပေးခြင်း (counter ကို ၁ လျှော့ခြင်း)   |
| `wg.Wait()` | Counter 0 ဖြစ်သွားသည်အထိ (အလုပ်အားလုံးပြီးသည်အထိ) Main ကို ရပ်ထားပေးသည်။ |

---

## Concurrency Patterns

Concurrency patterns တွေဟာ concurrent programming ရေးသားရာမှာ ကြုံတွေ့ရလေ့ရှိတဲ့ ပြဿနာတွေအတွက် စံပြုဖြေရှင်းနည်း (Standard Solutions) များ ဖြစ်ပါတယ်။

### ၁။ Pipeline Pattern

Data တွေကို အဆင့်ဆင့် process လုပ်သွားတဲ့ စနစ်ဖြစ်ပါတယ်။ Stage တစ်ခုရဲ့ output ဟာ နောက် stage တစ်ခုအတွက် input ဖြစ်လာပါတယ်။ အကြမ်းအားဖြင့်တော့ `Generator stage, Processing stage and Consumer stage`ဆိုပြီး stagesသုံးခု ရှိပါတယ်။

ဥပမာ - အစားအစာ Processing Factory

```
[ကုန်ကြမ်း] → [ဆေးကြော] → [လှီး] → [ချက်ပြုတ်] → [ထုပ်ပိုး] → [ပို့ဆောင်]
   Stage 1     Stage 2    Stage 3   Stage 4     Stage 5     Stage 6
```

Stage တစ်ခုချင်းစီ:

- ရှေ့ stage ကနေ inputလက်ခံ
- Data ကို processလုပ်
- နောက် stage ကို outputပို့

**_Pipeline Visual_**
![pipeline-visual](/blog/go-pipeline-visual.png)

```go
package main

import "fmt"

// Stage 1: Generator - numbers ထုတ်ပေးတယ်
func generator(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

// Stage 2: Square - number တစ်ခုချင်းစီကို square လုပ်တယ်
func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

// Stage 3: Double - number တစ်ခုချင်းစီကို double လုပ်တယ်
func double(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * 2
        }
        close(out)
    }()
    return out
}

func main() {
    // Pipeline ချိတ်ဆက်: generator → square → double → print
    nums := generator(1, 2, 3, 4, 5)
    squared := square(nums)
    doubled := double(squared)

    // နောက်ဆုံး output ကို consume လုပ်
    for result := range doubled {
        fmt.Println(result)
    }
}
// Output: 2, 8, 18, 32, 50
```

### ၂။ Fan-In Pattern

လမ်းကြောင်းပေါင်းစုံ (Multiple Channels) က လာတဲ့ data တွေကို စုစည်းပြီး လမ်းကြောင်းတစ်ခုတည်း (Single Channel) ထဲကို ထည့်သွင်းပေးတဲ့ ပုံစံဖြစ်ပါတယ်။

ဥပမာ - Customer Service

ဖုန်းလိုင်းများ (channels) → Queue တစ်ခု → Display တစ်ခုမှာ calls အားလုံးပြ

**_Fan In_**
![fan-in-visual](/blog/go-fan-in-visual.png)

```go
package main

import (
    "fmt"
    "sync"
)

func producer(name string, nums ...int) <-chan string {
    out := make(chan string)
    go func() {
        for _, n := range nums {
            out <- fmt.Sprintf("%s: %d", name, n)
        }
        close(out)
    }()
    return out
}

func fanIn(channels ...<-chan string) <-chan string {
    out := make(chan string)
    var wg sync.WaitGroup

    for _, ch := range channels {
        wg.Add(1)
        go func(c <-chan string) {
            defer wg.Done()
            for msg := range c {
                out <- msg
            }
        }(ch)
    }

    go func() {
        wg.Wait()
        close(out)
    }()

    return out
}

func main() {
    ch1 := producer("Server-A", 1, 2, 3)
    ch2 := producer("Server-B", 4, 5, 6)
    ch3 := producer("Server-C", 7, 8, 9)

    merged := fanIn(ch1, ch2, ch3)

    for msg := range merged {
        fmt.Println(msg)
    }
}
```

### ၃။ Context for Cancellation

Context ကို သုံးပြီး အလုပ်မပြီးသေးတဲ့ Goroutines တွေကို လိုအပ်တဲ့အချိန်မှာ အကုန်လုံးကို တစ်ပြိုင်နက် ရပ်တန့် (Cancel) ခိုင်းနိုင်ပါတယ်။

ဥပမာ - Search Engine

Servers တွေမှာ တစ်ပြိုင်နက် ရှာပြီး Server တစ်ခုက ရလဒ်ပြန်လာတာနဲ့ အခြား searches တွေအကုန်လုံးကို တစ်ပြိုင်နက် cancel လုပ်ပါတယ်။

```go
package main

import (
    "context"
    "fmt"
    "time"
)

func worker(ctx context.Context, name string) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("%s: Cancel signal ရရှိပါပြီ, ရပ်နေပါပြီ...\n", name)
            return
        default:
            fmt.Printf("%s: အလုပ်လုပ်နေပါတယ်...\n", name)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    // Cancel function ပါတဲ့ context ဖန်တီး
    ctx, cancel := context.WithCancel(context.Background())

    // Workers တွေ စတင်
    go worker(ctx, "Worker-1")
    go worker(ctx, "Worker-2")
    go worker(ctx, "Worker-3")

    // Workers တွေကို ၂ စက္ကန့် run ခွင့်ပေး
    time.Sleep(2 * time.Second)

    // Workers အားလုံးကို cancel လုပ်
    fmt.Println("\nMain: Workers အားလုံးကို cancel လုပ်နေပါတယ်...")
    cancel()

    // Workers တွေကို clean up လုပ်ဖို့ အချိန်ပေး
    time.Sleep(100 * time.Millisecond)
    fmt.Println("Main: အားလုံး ပြီးပါပြီ!")
}
```

### ၄။ Generator Pattern

**Generators** တွေက values တွေကို လိုအပ်မှသာ ထုတ်ပေးပါတယ်၊ လိုအပ်မှသာ compute လုပ်ပါတယ်။
Generator pattern ဟာ Memory Efficiency အတွက် အလွန်ကောင်းပါတယ်။ ဒေတာ ၁ သန်းလောက်ကို Array တစ်ခုထဲ အကုန်ထည့်ပြီး return ပြန်မယ့်အစား၊ လိုအပ်တဲ့အချိန်မှ တစ်ခုချင်းစီ ထုတ်ပေးတာဖြစ်လို့ Memory အသုံးစရိတ်ကို အများကြီး လျှော့ချပေးနိုင်ပါတယ်။

ဥပမာ - Streaming Service

Netflix က ရုပ်ရှင်တစ်ခုလုံးကို တစ်ခါတည်း download မဆွဲပဲ ကြည့်နေစဥ်အတောအတွင်း chunks တွေကို generate/stream လုပ်ပါတယ်။

```go
package main

import "fmt"

// Generator: fibonacci numbers တွေကို demand ရှိမှ ထုတ်ပေးတယ်
func fibonacci(n int) <-chan int {
    out := make(chan int)
    go func() {
        a, b := 0, 1
        for i := 0; i < n; i++ {
            out <- a
            a, b = b, a+b
        }
        close(out)
    }()
    return out
}

func main() {
    // ပထမ fibonacci numbers ၁၀ ခု ယူ
    for num := range fibonacci(10) {
        fmt.Println(num)
    }
}
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

---

## Concurrency Best Practices

### လုပ်သင့်တာများ ✅

1. Goroutines ကြား communicate လုပ်ဖို့ **channels သုံးပါ**
2. Channels မသုံးသင့်တဲ့အခါ shared state အတွက် **mutexes သုံးပါ**
3. Sending ပြီးရင် **channels တွေကို အမြဲ close လုပ်ပါ**
4. Mutexes unlock ဖို့ **`defer` သုံးပါ**
5. Long-running operations တွေမှာ cancellation အတွက် **context သုံးပါ**
6. Goroutines အများကြီးကို စောင့်ဖို့ **wait groups သုံးပါ**

### မလုပ်သင့်တာများ ❌

1. Synchronization မပါဘဲ **memory share မလုပ်ပါနဲ့**
2. Termination logic မပါဘဲ Goroutines များကို မဖန်တီးပါနှင့် (Goroutine Leak ဖြစ်တတ်သည်)။
3. Main function ပြီးဆုံးလျှင် Goroutines များပါ ရပ်သွားမည်ကို **မမေ့ပါနဲ့**
4. Unlock မလုပ်ခင် **mutex နှစ်ခါ lock မလုပ်ပါနဲ့** (deadlock ဖြစ်တတ်သည်)
5. Closed channel ကို **send မလုပ်ပါနဲ့** (panic ဖြစ်နိုင်သည်)

### အမြန် Reference

| ပြဿနာ                                    | ဖြေရှင်းချက်              |
| ---------------------------------------- | ------------------------- |
| Code ကို concurrently run ချင်တယ်        | `go functionName()`       |
| Goroutines ကြား communicate လုပ်ချင်တယ်  | Channels                  |
| Shared data ကို protect လုပ်ချင်တယ်      | `sync.Mutex`              |
| Goroutines တွေကို စောင့်ချင်တယ်          | `sync.WaitGroup`          |
| Operations တွေကို cancel လုပ်ချင်တယ်     | `context.Context`         |
| Channel operations အများကိုင်တွယ်ချင်တယ် | `select`                  |
| Operations timeout လုပ်ချင်တယ်           | `time.After` နဲ့ `select` |

> Go ရဲ့ concurrency model က scalable, high-performance applications တွေ တည်ဆောက်ဖို့ အထူးကောင်းပါတယ်။ ဒီ patterns တွေကို လေ့ကျင့်ပြီး professional Go code တွေ မကြာခင် ရေးနိုင်ပါလိမ့်မယ်!

---

_"Generated by Nyein Phyo Aung"_
