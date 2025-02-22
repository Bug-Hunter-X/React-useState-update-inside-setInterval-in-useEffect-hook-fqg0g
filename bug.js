```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000); // Updates every 1 second

    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array means runs only once on mount

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```