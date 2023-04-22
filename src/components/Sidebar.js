import { sectionsList } from "../db/sectionsList";
import { SidebarButton } from "./SidebarButton";
import { SidebarContainer } from "./SidebarContainer";

export function Sidebar() {
  return (
    <SidebarContainer>
      {sectionsList.map((item, i) => (
        <SidebarButton
          backgroundColor={item.brightColor}
          backgroundColorHover={item.color}
          color={item.id === "cadastro" && "white"}
          key={i}
        >
          <i className={`fas fa-${item.icon}`} />
        </SidebarButton>
      ))}
    </SidebarContainer>
  );
}
