import { renderDetails } from "../../utils/renderDetails";

function SectionListItem(item, onClick) {
  return (
    <li id="section-list-item" key={item.id} onClick={onClick}>
      {renderDetails(item.details)}
    </li>
  );
}

export default SectionListItem;
