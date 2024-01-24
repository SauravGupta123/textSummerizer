import { useState, useEffect } from "react"
import { linkIcon, loader, copy, logo, tick } from "../assets"

function Demo() {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
      });
      const [allArticles, setAllArticles] = useState([]);
      const [copied, setCopied] = useState("");


const handleSubmit=()=>{

}

const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

    return (
        <section className="mt-16 w-full max-w-xl border-blue-600 border-2">
            {/* search */}
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit={handleSubmit}
                >
                    <img
                        src={linkIcon}
                        alt='link-icon'
                        className='absolute left-0 my-2 ml-3 w-5'
                    />

                    <input
                        type='url'
                        placeholder='Paste the article link'
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        onKeyDown={handleKeyDown}
                        required
                        className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
                    />
                    <button
                        type='submit'
                        className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
                    >
                        <p>↵</p>
                    </button>
                </form>
            </div>
            
            {/* displaying result */}
            <div className='my-10 max-w-full flex justify-center items-center border-2 border-yellow-400'>
                displaying result 
            </div>


        </section>
    )
}

export default Demo
