import { useState } from "react";
import ladyDocImg from "../../../assets/Images/services/LadyDoc.png";
import teeth from "../../../assets/Images/services/teeth.png";
import therapy from "../../../assets/Images/services/therapy.png";
import Orthopedic from "../../../assets/Images/services/orthopedic.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const OurServices = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="my-32 grid md:grid-cols-2">
      <div>
        <img src={ladyDocImg} alt="" />
      </div>
      <div>
        <div className="space-y-5">
          <h3 className="text-3xl font-bold">Our Services</h3>
          <p className="text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="mt-10">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            selectedTabClassName="bg-white"
          >
            <TabList className="flex justify-evenly border rounded-md items-center md:gap-2 gap-1 text-center font-semibold text-sm md:text-xl md:font-bold mb-5 cursor-pointer ">
              <Tab
                className={
                  tabIndex === 0
                    ? "tab-bg md:p-4 rounded-md text-black"
                    : "text-black "
                }
              >
                Cavity Protection
              </Tab>
              <Tab
                className={
                  tabIndex === 1
                    ? "tab-bg md:p-4 rounded-md text-black"
                    : "text-black "
                }
              >
                Gastrology
              </Tab>
              <Tab
                className={
                  tabIndex === 2
                    ? "tab-bg md:p-4 rounded-md text-black"
                    : "text-black "
                }
              >
                Oral Surgery
              </Tab>
            </TabList>
            <TabPanel>
              <img className="my-10" src={teeth} alt="" />
              <div className="space-y-5 mt-10">
                <h3 className="text-2xl font-bold">Cavity Protection</h3>
                <p className="">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inve ntore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde
                  omnis iste natus error Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eaque iure quo ad suscipit necessitatibus
                  odio doloremque sequi eligendi soluta voluptate. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptatibus
                  recusandae expedita officiis perspiciatis porro.
                </p>
                <p>
                  Sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo.
                </p>
                <button className="secondary-btn">More Details</button>
              </div>
            </TabPanel>
            <TabPanel>
              <img className="my-10 w-full" src={therapy} alt="" />
              <div className="space-y-5 mt-10">
                <h3 className="text-2xl font-bold">
                  Electro Gastrology Therapy
                </h3>
                <p className="">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inve ntore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde
                  omnis iste natus error Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eaque iure quo ad suscipit necessitatibus
                  odio doloremque sequi eligendi soluta voluptate.
                </p>
                <p>
                  Sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="secondary-btn">More Details</button>
              </div>
            </TabPanel>
            <TabPanel>
              <img className="my-10 w-full" src={Orthopedic} alt="" />
              <div className="space-y-5 mt-10">
                <h3 className="text-2xl font-bold">Orthopedic</h3>
                <p className="">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inve ntore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde
                  omnis iste natus error Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eaque iure quo ad suscipit necessitatibus
                  odio doloremque sequi eligendi soluta voluptate. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptatibus
                  recusandae expedita officiis perspiciatis porro.
                </p>
                <p>
                  Sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Ducimus
                  consequuntur explicabo impedit nostrum suscipit consequatur
                  sed similique quas quis facilis.
                </p>
                <button className="secondary-btn">More Details</button>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
