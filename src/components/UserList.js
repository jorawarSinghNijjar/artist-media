import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import ArtistList from "./ArtistList";
import PhotographersList from "./PhotographersList";

function UserList() {
  return (
    <div className="z-10 ">
      <TabGroup>
        <TabList className="flex justify-start gap-6 mb-7">
          <Tab className="data-[selected]:border-none data-[selected]:text-[#101010] text-[#8D8D8D] font-semibold">
            Artist
          </Tab>
          <Tab className="data-[selected]:border-none data-[selected]:text-[#101010] text-[#8D8D8D] font-semibold">
            Photographers
          </Tab>
        </TabList>
        <div className="max-h-[1000px] scrollable">
          <TabPanels>
            <TabPanel>
              <ArtistList />
            </TabPanel>
            <TabPanel>
              <PhotographersList />
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
    </div>
  );
}

export default UserList;
