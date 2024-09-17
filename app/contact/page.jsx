export default function page(){
    return <main className="w-full min-h-[75vh] flex justify-center items-center">
    <div className="flex flex-col w-1/4 gap-y-3">
        <input className="py-2 rounded-md" placeholder="subject" type="text" name="subject" id="subject"/>
        <input type="email" className="py-2 rounded-md" placeholder="email@gmail.com" name="email" id="email" />
        <textarea name="body" id="body" rows={6} cols="30"></textarea>
        <button className="bg-cyan-500 py-2 px-4 tracking-widest font-[600] text-white">Submit</button>
    </div>
</main>
}