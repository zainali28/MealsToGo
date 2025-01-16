import { SafeArea } from "../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const ACCORDION_ICON = {
  Breakfast: "bread-slice-outline",
  Lunch: "food-outline",
  Dinner: "food-drumstick-outline",
  Drinks: "cup-outline",
};

export const RestaurantDetailCard = ({ route }) => {
  const { restaurant } = route.params;
  const [expandedBreakfast, setExpandedBreakfast] = useState(false);
  const [expandedLunch, setExpandedLunch] = useState(false);
  const [expandedDinner, setExpandedDinner] = useState(false);
  const [expandedDrinks, setExpandedDrinks] = useState(false);
  const [iconBreakfast, setIconBreakfast] = useState(ACCORDION_ICON.Breakfast);
  const [iconLunch, setIconLunch] = useState(ACCORDION_ICON.Lunch);
  const [iconDinner, setIconDinner] = useState(ACCORDION_ICON.Dinner);
  const [iconDrinks, setIconDrinks] = useState(ACCORDION_ICON.Drinks);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon={iconBreakfast} />}
            expanded={expandedBreakfast}
            onPress={() => {
              setIconBreakfast(
                expandedBreakfast
                  ? ACCORDION_ICON.Breakfast
                  : ACCORDION_ICON.Breakfast.replace("-outline", "")
              );
              setExpandedBreakfast(!expandedBreakfast);
            }}
          >
            <List.Item title="Breakfast1" />
            <List.Item title="Breakfast2" />
            <List.Item title="Breakfast3" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon={iconLunch} />}
            expanded={expandedLunch}
            onPress={() => {
              setIconLunch(
                expandedLunch
                  ? ACCORDION_ICON.Lunch
                  : ACCORDION_ICON.Lunch.replace("-outline", "")
              );
              setExpandedLunch(!expandedLunch);
            }}
          >
            <List.Item title="Lunch1" />
            <List.Item title="Lunch2" />
            <List.Item title="Lunch3" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon={iconDinner} />}
            expanded={expandedDinner}
            onPress={() => {
              setIconDinner(
                expandedDinner
                  ? ACCORDION_ICON.Dinner
                  : ACCORDION_ICON.Dinner.replace("-outline", "")
              );
              setExpandedDinner(!expandedDinner);
            }}
          >
            <List.Item title="Dinner1" />
            <List.Item title="Dinner2" />
            <List.Item title="Dinner3" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon={iconDrinks} />}
            expanded={expandedDrinks}
            onPress={() => {
              setIconDrinks(
                expandedDrinks
                  ? ACCORDION_ICON.Drinks
                  : ACCORDION_ICON.Drinks.replace("-outline", "")
              );
              setExpandedDrinks(!expandedDrinks);
            }}
          >
            <List.Item title="Drinks1" />
            <List.Item title="Drinks2" />
            <List.Item title="Drinks3" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
