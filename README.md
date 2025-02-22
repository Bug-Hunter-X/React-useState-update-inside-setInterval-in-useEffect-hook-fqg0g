# React useState Update Inside setInterval in useEffect Hook

This repository demonstrates a common issue in React applications where using `setInterval` within the `useEffect` hook leads to incorrect state updates. The problem arises because the `count` variable inside the `setInterval` callback is not updated correctly with the latest value from the state. 

## Problem
The provided code demonstrates an issue where the counter inside the `setInterval` callback does not update properly with the latest value from the state. This results in the counter increasing, but not displaying the correct value.