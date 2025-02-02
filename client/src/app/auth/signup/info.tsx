
export default function InfoSection() {
    const logos = ["MAHE", "KMC", "MIT"]; 
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-emerald-800 to-gray-950 text-white p-8">
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="space-y-8">
            <h2 className="text-3xl font-thin px-20 pt-36 leading-tight">
              Research Spotlight helps you create your academic portfolio
            </h2>
            <p className="text-xl px-20">and is used by more than 1500+ faculties across MAHE.</p>
          </div>
  
  
          <div className="grid grid-cols-3 gap-12 mb-20">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="font-thin text-2xl">{logo}</span> 
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  