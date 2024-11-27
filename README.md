# 🎨 Palette Wizard

This project is a web application developed in **Next.js 15** that uses artificial intelligence to generate customized color palettes. Users can use this tool for personal commercial purposes, leveraging an intuitive experience and accurate results.

## 📦 Technologies Used

- **Next.js 15**
- **Node.js 22**
- **Bun**
- **TypeScript**
- **Tailwind CSS**
- **OpenAI API** (or another AI tool)

---

## 🚀 Prerequisites

Before starting, make sure you have installed:

- **Node.js 22** (or higher).
- **bun**, **npm**, **yarn**, or **pnpm** (depending on your preferred package manager).

---

## 📋 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/fq962/palette-wizard
cd palette-wizard
```

### 2. Configure Environment Variables

The project requires a `.env.local` file to manage sensitive keys and configurations.

1. **Copy the example file**:
   ```bash
   cp .env.example .env.local
   ```
2. **Edit the `.env.local` file** and add your keys:

   ```plaintext
   # Example variables in .env.local
   API_KEY=your_api_key
   NEXT_PUBLIC_BASE_URL=YOUR_API_KEY
   ```
3. **IMPORTANT**: Do not share this file or include it in version control.

---

## 💻 Installation Instructions

### 3. Install Dependencies

With **bun**:

```bash
bun install
```

With **npm**:

```bash
npm install
```

With **yarn**:

```bash
yarn install
```

With **pnpm**:

```bash
pnpm install
```

### 4. Run the Project in Development

```bash
bun run dev
```

Or with other package managers:

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm dev
```

Access the application at `http://localhost:3000`.

---

## 🛠️ Available Commands

- **`bun run dev`**: Starts the server in development mode.
- **`bun run build`**: Builds the application for production.
- **`bun start`**: Starts the application in production mode.
- **`bun run lint`**: Runs the linter to detect errors.

---

## 🌍 Production Deployment

1. Run the following command to build the application:
   ```bash
   bun run build
   ```
2. Start the built application:
   ```bash
   bun start
   ```

---

## 📄 License

This project is under the **Custom License of HAIDE and CRYWHAT**. See the `LICENSE.MD` file for more details on the terms of use.

---

## 📞 Contact

For more information or support, contact:

- **HAIDE and CRYWHAT**
- Websites: [https://dfquintanilla.dev] or [https://crywhat.site]