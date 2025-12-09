# Computer Institute System — Certification Framework

## Certification Levels

| Level | Target Audience | Requirements | Validity |
|-------|-----------------|--------------|----------|
| **Foundation** | Beginners, students | Complete track + pass exam (60%+) | 3 years |
| **Intermediate** | Working professionals | Foundation + advanced modules + exam (70%+) | 3 years |
| **Professional** | Senior developers | Intermediate + capstone project + exam (80%+) | 2 years (renewal available) |

---

## Certification Tracks

### C++ Certifications
| Certification | Level | Modules Required | Exam Duration |
|---------------|-------|------------------|---------------|
| **C++ Foundations** | Foundation | M1–M4 | 90 min |
| **C++ Developer** | Intermediate | M1–M6 | 120 min |
| **C++ Professional** | Professional | M1–M8 + Capstone | 180 min |

### O-Level Certifications
| Certification | Level | Modules Required | Exam Duration |
|---------------|-------|------------------|---------------|
| **O-Level Computer Science** | Foundation | M1–M7 | 120 min |

### Other Certifications
| Certification | Level | Modules Required | Exam Duration |
|---------------|-------|------------------|---------------|
| **Python Foundations** | Foundation | M1–M6 | 90 min |
| **Java Developer** | Intermediate | M1–M7 | 120 min |
| **Full-Stack Web Developer** | Professional | M1–M8 | 180 min |
| **DSA Specialist** | Intermediate | M1–M6 | 150 min |

---

## Exam Format & Blueprint

### General Exam Structure

| Section | Format | Weight | Time Allocation |
|---------|--------|--------|-----------------|
| **MCQ** | Multiple choice (4 options) | 40% | 40% of total time |
| **Short Answer** | Fill-in-the-blank, output prediction | 20% | 20% of total time |
| **Coding Tasks** | Write/debug code in sandbox | 40% | 40% of total time |

### Domain Weights (C++ Developer Exam Example)

| Domain | Weight |
|--------|--------|
| Syntax & Basics | 15% |
| Functions & Arrays | 15% |
| Pointers & Memory | 20% |
| OOP Concepts | 25% |
| STL & Templates | 15% |
| File I/O & Exceptions | 10% |

### Passing Criteria

| Level | Pass Score | Distinction |
|-------|------------|-------------|
| Foundation | 60% | 85%+ |
| Intermediate | 70% | 90%+ |
| Professional | 80% | 95%+ |

### Retake Policy
- **Attempt 1**: Immediate availability
- **Attempt 2**: 7-day waiting period
- **Attempt 3+**: 30-day waiting period
- **Maximum**: Unlimited attempts
- **Fee**: 50% of original exam fee per retake

### Identity Verification
- Photo ID upload before exam
- Webcam photo capture at start
- Face match verification (AI-assisted)
- Optional: live proctor for Professional exams

---

## Sample Exam Questions

### C++ Foundations — MCQ Examples

**Q1. What is the output of the following code?**
```cpp
int x = 5;
cout << x++ << " " << ++x << endl;
```
A) 5 7  
B) 6 7  
C) 5 6  
D) **Undefined behavior** ✓

*Explanation: Multiple modifications of the same variable without a sequence point results in undefined behavior in C++.*

---

**Q2. Which of the following correctly declares a pointer to a constant integer?**
A) `int* const ptr;`  
B) `const int* ptr;` ✓  
C) `int const* const ptr;`  
D) `const* int ptr;`

*Explanation: `const int* ptr` means the integer value cannot be modified through this pointer.*

---

**Q3. What is the size of an empty class in C++?**
A) 0 bytes  
B) **1 byte** ✓  
C) 4 bytes  
D) Depends on compiler

*Explanation: C++ guarantees that each object has a unique address, so empty classes have size of at least 1 byte.*

---

### C++ Developer — Coding Task Examples

**Task 1: Reverse a Linked List**
```
Write a function to reverse a singly linked list in-place.

Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 5 -> 4 -> 3 -> 2 -> 1

Constraints:
- O(n) time complexity
- O(1) space complexity
- Handle empty list

Starter code provided. Complete the function.
```

**Sample Solution:**
```cpp
ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
```

**Grading Rubric:**
- Correctness (all test cases pass): 60%
- Edge cases (null, single node): 20%
- Code quality: 20%

---

**Task 2: Implement a Stack using Two Queues**
```
Implement a stack class using two queues. Support push, pop, top, and isEmpty.

Requirements:
- push: O(n)
- pop: O(1)
- top: O(1)
- isEmpty: O(1)
```

---

### O-Level — Sample Questions

**Q1. Convert the binary number 10110101 to hexadecimal.**
A) A5  
B) **B5** ✓  
C) C5  
D) D5

*Explanation: 1011 = B, 0101 = 5, so 10110101 = B5*

---

**Q2. Which logic gate produces output 1 only when both inputs are 1?**
A) OR  
B) **AND** ✓  
C) XOR  
D) NAND

---

**Q3. (Programming) Write pseudocode to find the largest number in an array.**

**Sample Answer:**
```
FUNCTION FindLargest(arr, size)
    SET max = arr[0]
    FOR i = 1 TO size - 1
        IF arr[i] > max THEN
            SET max = arr[i]
        ENDIF
    ENDFOR
    RETURN max
ENDFUNCTION
```

---

## Digital Credential & Badge Policy

### Badge Types

| Badge Type | Criteria | Visual |
|------------|----------|--------|
| **Course Completion** | Finish all modules | Bronze border |
| **Certification** | Pass proctored exam | Silver/Gold border |
| **Distinction** | Pass with 85%+ | Gold + star |
| **Skill Badge** | Complete specific skill path | Themed icon |

### Badge Metadata
- Recipient name
- Certification title
- Issue date
- Expiration date
- Issuer (Computer Institute System)
- Skills demonstrated
- Verification URL
- QR code

### Badge Format
- **Display**: PNG/SVG for social sharing
- **Data**: Open Badges 2.0 JSON-LD
- **Verification**: Unique URL + QR code
- **Blockchain**: Optional hash stored on-chain

---

## Verification Workflow

### For Badge Holders
1. Receive email with badge image + verification link
2. Add to LinkedIn, portfolio, resume
3. Share QR code on printed resume/business card

### For Employers/Verifiers
1. Scan QR code or visit verification URL
2. View verification page with:
   - Badge holder's name
   - Certification name & level
   - Issue/expiration dates
   - Skills list
   - Exam score range (e.g., "Passed with Distinction")
   - Issuer authenticity seal
3. Optional: Download verification PDF

### Verification Page Example
```
╔═══════════════════════════════════════════════════════════╗
║  ✓ VERIFIED CREDENTIAL                                    ║
╠═══════════════════════════════════════════════════════════╣
║  Holder: John Doe                                         ║
║  Certification: C++ Developer (Intermediate)              ║
║  Issued: January 15, 2025                                 ║
║  Expires: January 15, 2028                                ║
║  Status: ● Active                                         ║
║                                                           ║
║  Skills: OOP, STL, Memory Management, Templates           ║
║                                                           ║
║  Issued by: Computer Institute System                     ║
║  Verification ID: CIS-CPP-2025-00001234                   ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Exam Security & Proctoring

### Security Measures
- Browser lockdown (no tabs, no copy-paste from external)
- Randomized question order
- Question pools (each exam draws from pool)
- Time limits per question (optional)
- Activity logging (keystroke patterns, focus changes)

### Proctoring Options

| Level | Method | Use Case |
|-------|--------|----------|
| **Basic** | AI monitoring (webcam + audio) | Foundation exams |
| **Standard** | AI + flagging for human review | Intermediate exams |
| **Live** | Real-time human proctor | Professional exams |

### Proctoring Flow
1. System check (webcam, mic, internet)
2. ID verification
3. Environment scan (360° room view)
4. Exam begins with continuous monitoring
5. Flags reviewed post-exam
6. Results released after review (max 48h)

---

## Renewal & Continuing Education

### Renewal Requirements
- **Professional certs**: 20 CE credits over 2 years
- **Credits earned via**:
  - New courses (5 credits each)
  - Conference attendance (2 credits)
  - Published articles/tutorials (3 credits)
  - Mentoring hours (1 credit per 5 hours)

### Renewal Exam
- Shorter version (50% length)
- Focus on updates since last certification
- 70% passing score

---

## Certification Revocation

Certifications may be revoked for:
- Academic integrity violations
- Fraudulent identity verification
- Credential misrepresentation

Appeal process available within 30 days.
