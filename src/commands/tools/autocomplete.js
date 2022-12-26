const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autocompletetest")
    .setDescription("Returns test command for autocomplete!")
    .addStringOption((option) =>
      option
        .setName("test")
        .setDescription("Test autocomplete")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedOption = interaction.options.getFocused();
    const choices = ["fun", "hello bot", "test"];
    const filterd = choices.filter((choice) =>
      choice.startsWith(focusedOption)
    );
    await interaction.respond(
      filterd.map((choice) => ({ name: choice, value: choice }))
    );
  },

  async execute(interaction, client) {
    const test = interaction.options.getString("test");
    await interaction.reply(`you told me: ${test}`);
  },
};
