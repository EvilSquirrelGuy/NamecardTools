import Image from "next/image"

export default function NotFound() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-12">
      <Image 
        src="https://http.cat/404"
        alt="404 Not Found"
        width={0} height={0}
        className="w-auto h-auto"
        unoptimized={true}
      />
    </div>
  )
}