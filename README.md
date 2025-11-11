# Linear Glass Panel

A modern, minimalist issue creation interface inspired by Linear's elegant design philosophy—a mix of minimalism and high attention to detail.

## 🎬 Demo

Demo-> [LinkedIn](https://www.linkedin.com/posts/zacharyxi_todays-project-an-issue-creation-button-activity-7393800223795372033-FD9y?utm_source=share&utm_medium=member_desktop&rcm=ACoAACVoKp4BTklUHdi1ni_mubY4MnY8g0_te1g)

## 🤔 Why This Project?

This project was born from a desire to practice **high-touch, taste-driven coding**. In an era where AI tools can quickly generate interfaces, it's easy to let them dictate design choices. This project is about slowing down, observing carefully, and implementing with intention—understanding not just *what* makes Linear's interface great, but *why*.

## 🎨 Inspiration & Design Philosophy

This project is a challenge to mimic Linear's issue creation flow—a study in UI/UX excellence and taste-driven coding. Rather than letting tools dictate design choices, this project focuses on understanding and implementing the subtle details that make great interfaces feel effortless.

### Three Key Observations from Linear:

**1. Smart Focus** 
After clicking "Compose," the cursor is automatically placed on the "Insert Title" field, creating a smooth entry into the workflow. No extra clicks needed—the interface anticipates your next action.

**2. Continuous Canvas**
There are no lines or boxes separating the "Issue title" and "Add description" fields. Instead, it creates one clean, continuous canvas that feels seamless and distraction-free.

**3. Color Feedback**
The only color that isn't black/grey/purple is the green checkmark you receive after creating an issue. This intentional use of color creates a positive feedback mechanism that makes completing work feel rewarding.

### Design Principles Explored:

- **Minimalist Design**: Clean layouts with purposeful whitespace
- **Smooth Animations**: Fluid transitions that feel natural
- **Typography**: Clear hierarchy and readable text
- **Intentional Color**: Strategic use of color for feedback
- **Dark Theme**: Modern, low-light aesthetic
- **Attention to Detail**: Every pixel and interaction considered

## ✨ Features

### Issue Creation Modal
- **Floating Glass Card**: Dark theme with subtle borders and shadows
- **Unified Input Container**: Seamless title and description fields
- **Auto-focus**: Cursor automatically enters title field on open
- **Clean Layout**: Left-aligned text with minimal visual noise
- **Smooth Animations**: Scale and fade transitions

### Interactive Elements
- **Center Create Button**: Glassmorphic icon button with hover effects
- **Close Button**: Transparent X with subtle hover state
- **Create Issue Button**: Centered, compact action button
- **Keyboard Support**: ESC key closes modal

### Success Notification
- **Toast Notification**: Slides up from bottom-right corner
- **Visual Feedback**: Green checkmark confirms creation
- **Issue Title Display**: Shows what was just created
- **View Issue Link**: Purple link for navigation
- **Auto-dismiss**: Disappears after 5 seconds
- **Manual Close**: X button for immediate dismissal

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, flexbox, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Vite**: Fast development server with HMR

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linear-glass-panel.git
cd linear-glass-panel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the local URL (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📖 Usage

1. **Open Modal**: Click the center create button
2. **Enter Details**: Type your issue title (auto-focused) and description
3. **Create Issue**: Click "Create issue" button
4. **Confirmation**: Toast notification appears with success message
5. **Close**: Click X or press ESC to dismiss

## 🎯 Design Elements

### Color Palette
- **Background**: Pure black (`#000000`)
- **Modal**: Dark gray (`#1C1D1F`)
- **Primary Action**: Blue (`rgb(109, 120, 231)`)
- **Success**: Green (`#22c55e`)
- **Link**: Purple (`#6d78e7`)
- **Text**: White with various opacities

### Typography
- **Font Family**: System fonts (Apple system, Segoe UI, Roboto)
- **Title**: 16px, medium weight (500)
- **Body**: 15px, normal weight
- **Labels**: 14px, medium weight

### Spacing & Layout
- **Modal Width**: 480px
- **Border Radius**: 24px (modal), 12px (inputs/toast)
- **Padding**: Asymmetric (20px left, 40px right/top, 10px bottom)
- **Gaps**: 8-16px between elements

### Animations
- **Modal**: Scale from 0.9 to 1.0 with opacity fade
- **Toast**: Translate Y with opacity fade
- **Duration**: 300ms with cubic-bezier easing
- **Hover**: Subtle background and shadow changes

## 🎓 Key Learnings

### From Studying Linear's Design:

**Taste-Driven Development**
This project emphasized high-touch, intentional coding rather than letting AI tools dictate design choices. Every decision was made with purpose.

**Small Details, Big Impact**
It's amazing how much thought lives in tiny details:
- Auto-focusing the title field saves one click but feels transformative
- Removing visual separators creates psychological flow
- Using color sparingly makes positive feedback more meaningful

**Design Principles Applied:**
1. **Less is More**: Minimal UI with maximum impact
2. **Purposeful Animation**: Every transition has meaning
3. **Visual Hierarchy**: Clear focus on primary actions
4. **Instant Feedback**: User knows exactly what happened
5. **Attention to Detail**: Every pixel matters
6. **Anticipatory Design**: Interface predicts user needs
7. **Psychological Flow**: Continuous canvas reduces mental friction

## 📂 Project Structure

```
linear-glass-panel/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Modal and toast functionality
├── package.json        # Dependencies and scripts
├── .gitignore         # Git ignore rules
├── LICENSE            # MIT License
└── README.md          # This file
```

## 💭 Reflection

> "It's amazing how much thought lives in these details."

This project reinforced that great design isn't about adding more—it's about carefully considering each element and interaction. The difference between a good interface and a great one often comes down to these small, thoughtful details.

## 🔮 Future Enhancements

- [ ] Add form validation
- [ ] Keyboard shortcuts (Cmd+K to open)
- [ ] Multiple toast notifications
- [ ] Connect to actual API/backend

## 📝 License

MIT License - feel free to use this project for learning or inspiration.

---

*Built as a design study project focused on taste-driven development and understanding the details that make great interfaces.*

**Read more about the design process:** [LinkedIn Post](https://www.linkedin.com/posts/zacharyxi_todays-project-an-issue-creation-button-activity-7393800223795372033-FD9y)

