import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Bottle from "../components/Bottle";

const meta: Meta<typeof Bottle> = {
  title: "Components/Bottle",
  component: Bottle,
};
export default meta;

type Story = StoryObj<typeof Bottle>;

export const SmallBottle: Story = {
  args: {
    imageSrc: "/Irk_06L.png",
    altText: "Бутылка 0.6л",
    volume: "0,6 л",
    width: 80,
  },
};

export const MediumBottle: Story = {
  args: {
    imageSrc: "/irk_1,25L.png",
    altText: "Бутылка 1.25л",
    volume: "1,25 л",
    width: 110,
  },
};

export const LargeBottle: Story = {
  args: {
    imageSrc: "/Irk_2L.png",
    altText: "Бутылка 2л",
    volume: "2 л",
    width: 144,
  },
};
