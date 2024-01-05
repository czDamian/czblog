async function fakeData(){
  const res = await fetch("https://randomuser.me/api");

  if(!res.ok){
    throw new Error ('Failed to fetch data')
  }
  return res.json()
}


export default async function Posts () {
  const data = await fakeData();
  const setData=data.results[0];
  return (
    <div>
      <h1 className="font-bold">Posts</h1>
      <p>
       Gender:{setData.gender} <br/>
       DOB:{setData.dob.age}yrs<br/>
       Country:{setData.location.country}<br/>
       Cell phone:{setData.cell}<br/>
       Email:{setData.email}<br/>
      </p>
    </div>
  );
};