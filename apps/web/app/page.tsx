import * as Icon from 'humanicon';

export default function Page() {
  return (
    <div className="p-10 flex flex-col gap-8 items-center">
      <h1 className="text-2xl font-bold">My Humanicon</h1>
      
      <div className="flex gap-4">
  
        <Icon.Date className="w-10 h-10 text-blue-500" />
    
        <Icon.DateFill className="w-10 h-10 text-red-500" />
      </div>
    </div>
  );
}