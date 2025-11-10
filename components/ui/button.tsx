export function Button({className="",variant="primary",size="md",...props}){
 const base="inline-flex items-center justify-center rounded-2xl font-medium border border-white/10";
 const v={primary:"bg-white text-black",secondary:"bg-transparent text-white"};
 const s={sm:"h-8 px-3",md:"h-10 px-4",lg:"h-12 px-5"};
 return <button className={`${base} ${v[variant]} ${s[size]} ${className}`} {...props}/>;}