const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Returns bot info!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Bot Info")
      .setDescription("official Blasix bot")
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now());

    await interaction.reply({
      embeds: [embed],
    });
  },
};

