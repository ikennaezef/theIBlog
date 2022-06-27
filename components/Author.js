import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/sanity";

const Author = ({ author }) => {
  return (
    <div className='flex flex-col space-y-4 border p-2 pb-4'>
      <div>
        <img src={urlFor(author?.image).url()} className='h-[18rem] w-full object-cover object-top' />
      </div>
      <div>
        <h3 className='text-xl font-sans mb-1'>{author?.name}</h3>
        <div>
          <PortableText
            value={author?.bio}
            components={{
              block: {
                normal: ({ children }) => <p className='text-md leading-normal'>{children}</p>
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Author