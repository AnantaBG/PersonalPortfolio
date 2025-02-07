import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const FooTer = () => {
    return (
        <Footer className="lg:w-3/4 mx-auto md:w-10/12 w-11/12 mt-5" bgDark>
        <div className="mx-auto w-full">
          <div className="flex mx-auto justify-evenly w-full gap-8 px-6 py-8">
            <div>
              <Footer.Title title="Ananta" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link target="_blank" href="https://github.com/AnantaBG">GitHub</Footer.Link>
                <Footer.Link target="_blank" href="https://x.com/AnantaBanik3">Twitter</Footer.Link>
                <Footer.Link target="_blank" href="https://www.facebook.com/AnantaBanik3x/">Facebook</Footer.Link>
                <Footer.Link href="#contact">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Ananta™" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon target="_blank" href="https://www.facebook.com/AnantaBanik3x/" icon={BsFacebook} />
              <Footer.Icon href="https://x.com/AnantaBanik3" target="_blank" icon={BsTwitter} />
              <Footer.Icon target="_blank" href="https://github.com/AnantaBG" icon={BsGithub} />
              <Footer.Icon target="_blank" href="https://www.linkedin.com/in/anchba"  icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    );
};

export default FooTer;