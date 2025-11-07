---
title: "Understanding React Lifecycle Methods"
description: "A comprehensive guide to React component lifecycle methods, from mounting to unmounting, and how they translate to modern hooks"
excerpt: "Master React lifecycle methods and understand how components are created, updated, and destroyed in the React ecosystem"
date: "2025-11-06"
tags: ["react", "javascript", "frontend"]
featured: true
image: ""
readingTime: 10
---

## Introduction

React components go through a series of phases during their existence in an application. Understanding the lifecycle methods is crucial for managing side effects, optimizing performance, and building robust React applications.

This guide covers **two main approaches** to handling component lifecycle:

1. **Class-based Components** - Traditional approach using lifecycle methods
2. **Functional Components with Hooks** - Modern React approach

Each approach handles the **four lifecycle phases**:

1. **Mounting** - Component is created or inserted into the DOM
2. **Updating** - Component re-renders due to changes in props or state
3. **Unmounting** - Component is removed or destroyed from the DOM
4. **Error Handling** - Error occurred in component tree

---

# 1. Class-based Components: Lifecycle Methods

## 1.1 Mounting Phase

_When component is created and inserted into the DOM_

### constructor()

```javascript
constructor(props) {
  super(props);
  this.state = {
    count: 0,
    data: null
  };
}
```

Initializes state and binds methods. Called once when the component is created or inserted.

> Similar to `ngOnInit` and `ngOnChanges` lifecycle in Angular.

### static getDerivedStateFromProps()

```javascript
static getDerivedStateFromProps(nextProps, nextState) {
  // If the props have changed, we can return a new state
  return nextProps.someValue !== nextState.someValue
    ? { count: nextProps.someValue }
    : null;
}
```

Called right before rendering. Allows you to update the state based on the new props.

### render()

```javascript
render() {
  return <div>Count: {this.state.count}</div>;
}
```

The required method in every React class component. Returns the JSX that describes what to render on the UI screen.

### componentDidMount()

```javascript
componentDidMount() {
  console.log('Component has mounted!');
}
```

Called once the component has been rendered to the DOM. Often used for fetching data or setting up subscriptions.

---

## 1.2 Updating Phase

_When the component's state or props change_

### static getDerivedStateFromProps()

Called again before every re-render (when props or state change).

### shouldComponentUpdate()

```javascript
shouldComponentUpdate(nextProps, nextState) {
  return nextState.count !== this.state.count; // Only re-render if count changes
}
```

Determines whether the component should update. Use for performance optimization.

### render()

The `render()` method will be called again to update the UI with the new state or props.

### getSnapshotBeforeUpdate()

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  return null; // Return value is passed to componentDidUpdate
}
```

Called before changes to the DOM are applied.

### componentDidUpdate()

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('Component did update');
}
```

Called after the component has been updated. Useful for performing additional side effects based on the previous props and state.

---

## 1.3 Unmounting Phase

_When the component is being removed or destroyed_

### componentWillUnmount()

```javascript
componentWillUnmount() {
  console.log('Component will unmount');
}
```

Called right before the component is unmounted and destroyed. This is where you clean up anything like cancelling API requests, removing event listeners, etc.

> Similar to `ngOnDestroy` lifecycle in Angular.

---

# 2. Functional Components with Hooks

Modern React approach using hooks for lifecycle management.

## 2.1 Mounting Phase

_When the component is first rendered_

### useEffect()

The `useEffect` hook is like `componentDidMount` in class components. It runs after the component has mounted, and it's where you would trigger side effects like fetching data.

```javascript
import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs after the component mounts (similar to componentDidMount)
    console.log("Component has mounted!");

    // Cleanup function (like componentWillUnmount)
    return () => {
      console.log("Cleanup before unmount");
    };
  }, []); // Empty array means it runs only once (on mount)

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---

## 2.2 Updating Phase

_When the component's state or props change_

### useEffect() with Dependencies

When a component's state or props change, `useEffect` is called again (if you have dependencies specified). In the update phase, `useEffect` runs again when any dependencies (like state or props) change. You can specify which variables you want to track by passing them as an array.

```javascript
useEffect(() => {
  console.log("Component updated, count is now:", count);
}, [count]); // This effect runs when `count` changes
```

---

## 2.3 Unmounting Phase

_When the component is being removed or destroyed_

### Cleanup Function

The **cleanup function** inside `useEffect` works like `componentWillUnmount` from class components. It's called when the component is about to unmount or before the effect runs again.

```javascript
useEffect(() => {
  // Side effect (e.g., data fetching)
  return () => {
    // Cleanup (like cancelling API requests, removing event listeners)
    console.log("Cleanup before unmount");
  };
}, []); // Empty array ensures this only runs once (like componentDidMount)
```

---

## Lifecycle to Hooks Mapping

| Class Component              | Functional Component (Hooks)           |
| ---------------------------- | -------------------------------------- |
| `constructor()`              | `useState()` hook                      |
| `componentDidMount()`        | `useEffect(() => {}, [])`              |
| `componentDidUpdate()`       | `useEffect(() => {})`                  |
| `componentWillUnmount()`     | `useEffect(() => { return () => {} })` |
| `shouldComponentUpdate()`    | `React.memo()`                         |
| `getDerivedStateFromProps()` | `useState()` with update logic         |
| Error boundaries             | No direct equivalent (use class)       |

---

# 3. Error Handling Phase

## 3.1 Class Components

### static getDerivedStateFromError()

```javascript
static getDerivedStateFromError(error) {
  return { hasError: true };
}
```

Called when descendant component throws error. Returns value to update state and render fallback UI.

### componentDidCatch()

```javascript
componentDidCatch(error, errorInfo) {
  // Log error to error reporting service
  logErrorToService(error, errorInfo);
}
```

Called when descendant component throws error. Receives error and error info with component stack. Use for side effects like logging.

## 3.2 Functional Components

Currently, there is no direct equivalent for error boundaries in functional components. You must use class components for error handling.

---

## Summary

React components follow a predictable lifecycle with four main phases:

1. **Mounting** - Component creation and insertion
2. **Updating** - Re-rendering due to changes
3. **Unmounting** - Component removal
4. **Error Handling** - Handling errors in component tree

You can manage these phases using:

- **Class Components** with lifecycle methods (`componentDidMount`, `componentDidUpdate`, etc.)
- **Functional Components** with hooks (`useEffect`, `useState`, etc.)

While modern React favors functional components with hooks, understanding both approaches helps you work with any React codebase and grasp fundamental React concepts.
