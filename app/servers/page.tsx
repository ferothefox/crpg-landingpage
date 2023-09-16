import Logo from '@/components/Logo';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
	return (
    	<main className="flex h-full flex-col items-center justify-between">
    		<div className="max-w-6xl w-full mx-auto flex flex-col items-center">
		        <header className="animate-header-in w-full flex flex-row h-16 items-center border-b-2 border-[#ffffff11] border-dashed">
		          <a className="transition border-r-2 border-[transparent] flex flex-row items-center gap-2 items-center font-extrabold text-white tracking-tight" href="/">
		            <div className="w-16 h-16 p-4 flex">
		              <Logo />
		            </div>
		            <div className="">Custom RPG Dashboard</div>
		          </a>

		          {/*Profile menu*/}
		        </header>
		        <div className="custom-animate-in relative w-full flex flex-col items-center my-4 pt-8 px-4">
		        	<div className="w-full mb-4">
		        		<a className="text-sm text-white">Servers</a>
		        	</div>

		        	<div className="w-full flex flex-row items-center text-white justify-between">
		        		<a className="font-extrabold text-4xl">Manage Servers</a>
		        		<a href="javascript:void(0);" id="refresh_servers">
		        			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
							</svg>
		        		</a>
		        	</div>

		        	<div class="servers-list" id="servers"></div>
        		</div>
        	</div>
    	</main>

    	// <script type="module" src="/public/js/pages/servers.ts"></script>
	)
}

export default Page