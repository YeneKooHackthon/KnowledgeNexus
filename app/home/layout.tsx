import { SideBar, MobileSideBar, AvatarDemo } from "@/components/homeLayOut";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex">
        <SideBar />
      </div>

      <main className="flex flex-col justify-center items-center h-full w-full">
        <div className="border-b-[1px] flex justify-between px-[2.5%] items-center  sticky top-0 border-primary-foreground h-[7vh] w-full">
          <div>
            <div className="md:hidden flex">
              <MobileSideBar />
            </div>
          </div>
          <AvatarDemo />
        </div>
        <div className="h-full overflow-y-scroll w-full">{children}</div>
      </main>
    </div>
  );
}
