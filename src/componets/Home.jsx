function Home() {
    const [users, setUsers] = useState({});

    const fetchaUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json));
    console.log("users fetched..");
 };

    useEffect(fetchaUsers, []);
    console.log(users);
    return (
       <>
       <h1>Home</h1>
       </> 
    )
}
export default Home;