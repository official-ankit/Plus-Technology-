'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Award,
  RotateCcw,
  Flag,
} from 'lucide-react';

// Mock quiz data
const quiz = {
  id: '3-7',
  title: 'Quiz: Control Flow',
  description: 'Test your understanding of control flow statements including if-else, switch, and loops in C++.',
  duration: 15,
  totalQuestions: 10,
  passingScore: 70,
  attempts: 3,
  attemptsUsed: 0,
  questions: [
    {
      id: 1,
      question: 'What is the correct syntax for a for loop in C++?',
      options: [
        'for (int i = 0; i < 10; i++)',
        'for int i = 0 to 10',
        'for (i = 0; i < 10; i++)',
        'loop (int i = 0; i < 10; i++)',
      ],
      correctAnswer: 0,
      explanation: 'The correct syntax for a for loop in C++ is: for (initialization; condition; increment) { // body }',
    },
    {
      id: 2,
      question: 'Which statement is used to exit a loop prematurely in C++?',
      options: ['continue', 'exit', 'break', 'stop'],
      correctAnswer: 2,
      explanation: 'The break statement immediately exits the innermost loop or switch statement.',
    },
    {
      id: 3,
      question: 'What will be the output of: for(int i=0; i<5; i++) { if(i==3) continue; cout << i; }',
      options: ['01234', '0124', '012', '01245'],
      correctAnswer: 1,
      explanation: 'The continue statement skips the current iteration when i equals 3, so 3 is not printed.',
    },
    {
      id: 4,
      question: 'Which loop guarantees at least one execution of the loop body?',
      options: ['for loop', 'while loop', 'do-while loop', 'foreach loop'],
      correctAnswer: 2,
      explanation: 'A do-while loop checks the condition after executing the loop body, guaranteeing at least one execution.',
    },
    {
      id: 5,
      question: 'What is the default case in a switch statement used for?',
      options: [
        'To handle the first case',
        'To handle unmatched cases',
        'To initialize variables',
        'To break out of the switch',
      ],
      correctAnswer: 1,
      explanation: 'The default case handles all values that don\'t match any of the specified case values.',
    },
    {
      id: 6,
      question: 'How many times will this loop execute: for(int i=10; i>0; i-=2)',
      options: ['5 times', '10 times', '4 times', '6 times'],
      correctAnswer: 0,
      explanation: 'Starting from 10, decrementing by 2 each time: 10, 8, 6, 4, 2 = 5 iterations.',
    },
    {
      id: 7,
      question: 'What happens if you omit the break statement in a switch case?',
      options: [
        'Compilation error',
        'Only that case executes',
        'Fall-through to the next case',
        'Program terminates',
      ],
      correctAnswer: 2,
      explanation: 'Without break, execution "falls through" and continues executing the next case(s).',
    },
    {
      id: 8,
      question: 'Which operator is used for the ternary conditional in C++?',
      options: ['if-else', '? :', '?? :', '=>'],
      correctAnswer: 1,
      explanation: 'The ternary operator ?: is a shorthand for simple if-else: condition ? value_if_true : value_if_false',
    },
    {
      id: 9,
      question: 'What is an infinite loop?',
      options: [
        'A loop that runs exactly once',
        'A loop that never terminates',
        'A loop with no body',
        'A loop inside another loop',
      ],
      correctAnswer: 1,
      explanation: 'An infinite loop is a loop whose condition never becomes false, causing it to run indefinitely.',
    },
    {
      id: 10,
      question: 'Which is NOT a valid way to create an infinite loop?',
      options: ['while(true) {}', 'for(;;) {}', 'do {} while(1);', 'for(int i=0;;i++) {}'],
      correctAnswer: 3,
      explanation: 'The last option has an increment that could eventually cause overflow, but the first three are classic infinite loop patterns.',
    },
  ],
};

type QuizState = 'intro' | 'inProgress' | 'review' | 'results';

export default function QuizPage({ params }: { params: { id: string } }) {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quiz.questions.length).fill(null));
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setQuizState('results');
  };

  const handleRetry = () => {
    setAnswers(new Array(quiz.questions.length).fill(null));
    setFlagged(new Set());
    setCurrentQuestion(0);
    setTimeLeft(quiz.duration * 60);
    setQuizState('inProgress');
  };

  const toggleFlag = () => {
    const newFlagged = new Set(flagged);
    if (newFlagged.has(currentQuestion)) {
      newFlagged.delete(currentQuestion);
    } else {
      newFlagged.add(currentQuestion);
    }
    setFlagged(newFlagged);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate score
  const correctAnswers = answers.filter((a, i) => a === quiz.questions[i].correctAnswer).length;
  const score = Math.round((correctAnswers / quiz.totalQuestions) * 100);
  const passed = score >= quiz.passingScore;

  // Quiz Introduction
  if (quizState === 'intro') {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link
          href="/courses/1"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Course
        </Link>

        <Card>
          <CardHeader className="text-center">
            <Badge variant="secondary" className="mx-auto mb-4 w-fit">
              Quiz
            </Badge>
            <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">{quiz.totalQuestions}</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">{quiz.duration} min</div>
                <div className="text-sm text-muted-foreground">Time Limit</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">{quiz.passingScore}%</div>
                <div className="text-sm text-muted-foreground">Passing Score</div>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {quiz.attempts - quiz.attemptsUsed}
                </div>
                <div className="text-sm text-muted-foreground">Attempts Left</div>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-medium">Instructions:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Answer all questions within the time limit</li>
                <li>• You can navigate between questions freely</li>
                <li>• Flag questions to review later</li>
                <li>• You must score at least {quiz.passingScore}% to pass</li>
                <li>• You have {quiz.attempts} attempts for this quiz</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button size="lg" onClick={() => setQuizState('inProgress')}>
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Quiz Results
  if (quizState === 'results') {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Card>
          <CardHeader className="text-center">
            {passed ? (
              <>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Congratulations!
                </CardTitle>
                <CardDescription>You passed the quiz!</CardDescription>
              </>
            ) : (
              <>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                  <XCircle className="h-10 w-10 text-red-500" />
                </div>
                <CardTitle className="text-2xl text-red-600">
                  Not Quite!
                </CardTitle>
                <CardDescription>You need {quiz.passingScore}% to pass</CardDescription>
              </>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{score}%</div>
              <div className="text-muted-foreground">
                {correctAnswers} of {quiz.totalQuestions} questions correct
              </div>
            </div>

            <Progress value={score} className="h-3" />

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-bold">{correctAnswers}</span>
                </div>
                <div className="text-xs text-muted-foreground">Correct</div>
              </div>
              <div className="rounded-lg border p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-red-500">
                  <XCircle className="h-4 w-4" />
                  <span className="font-bold">{quiz.totalQuestions - correctAnswers}</span>
                </div>
                <div className="text-xs text-muted-foreground">Incorrect</div>
              </div>
              <div className="rounded-lg border p-3 text-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="font-bold">{formatTime(quiz.duration * 60 - timeLeft)}</span>
                </div>
                <div className="text-xs text-muted-foreground">Time Taken</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button onClick={() => setQuizState('review')} className="w-full">
              Review Answers
            </Button>
            {!passed && quiz.attempts - quiz.attemptsUsed > 1 && (
              <Button variant="outline" onClick={handleRetry} className="w-full gap-2">
                <RotateCcw className="h-4 w-4" />
                Try Again
              </Button>
            )}
            <Button variant="ghost" asChild className="w-full">
              <Link href="/courses/1">Back to Course</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // Quiz Review
  if (quizState === 'review') {
    const question = quiz.questions[currentQuestion];
    const userAnswer = answers[currentQuestion];
    const isCorrect = userAnswer === question.correctAnswer;

    return (
      <div className="container mx-auto max-w-3xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">Review: {quiz.title}</h1>
          <Button variant="outline" onClick={() => setQuizState('results')}>
            Back to Results
          </Button>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <Progress value={((currentQuestion + 1) / quiz.totalQuestions) * 100} className="h-2" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQuestion + 1} of {quiz.totalQuestions}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <Card className={isCorrect ? 'border-primary' : 'border-red-500'}>
          <CardHeader>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-primary" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              <Badge variant={isCorrect ? 'default' : 'destructive'}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </Badge>
            </div>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {question.options.map((option, index) => {
              const isUserAnswer = userAnswer === index;
              const isCorrectAnswer = question.correctAnswer === index;

              let className = 'rounded-lg border p-4 transition-colors';
              if (isCorrectAnswer) {
                className += ' border-primary bg-primary/5';
              } else if (isUserAnswer && !isCorrectAnswer) {
                className += ' border-red-500 bg-red-50';
              }

              return (
                <div key={index} className={className}>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                        isCorrectAnswer
                          ? 'bg-primary text-white'
                          : isUserAnswer
                          ? 'bg-red-500 text-white'
                          : 'border bg-muted'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {isCorrectAnswer && <CheckCircle className="h-5 w-5 text-primary" />}
                    {isUserAnswer && !isCorrectAnswer && <XCircle className="h-5 w-5 text-red-500" />}
                  </div>
                </div>
              );
            })}

            {/* Explanation */}
            <div className="mt-4 rounded-lg bg-muted p-4">
              <div className="mb-1 flex items-center gap-2 font-medium">
                <AlertCircle className="h-4 w-4 text-primary" />
                Explanation
              </div>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
            disabled={currentQuestion === quiz.totalQuestions - 1}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  // Quiz In Progress
  const question = quiz.questions[currentQuestion];
  const answeredCount = answers.filter((a) => a !== null).length;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">{quiz.title}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-mono font-medium">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <Progress value={((currentQuestion + 1) / quiz.totalQuestions) * 100} className="h-2" />
        <div className="mt-2 flex justify-between text-sm text-muted-foreground">
          <span>
            Question {currentQuestion + 1} of {quiz.totalQuestions}
          </span>
          <span>{answeredCount} answered</span>
        </div>
      </div>

      {/* Question Indicators */}
      <div className="mb-6 flex flex-wrap gap-2">
        {quiz.questions.map((_, index) => (
          <Button
            key={index}
            variant={
              currentQuestion === index
                ? 'default'
                : answers[index] !== null
                ? 'secondary'
                : 'outline'
            }
            size="sm"
            className={`h-8 w-8 p-0 ${flagged.has(index) ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge variant="secondary">Question {currentQuestion + 1}</Badge>
            <Button
              variant={flagged.has(currentQuestion) ? 'default' : 'ghost'}
              size="sm"
              onClick={toggleFlag}
              className="gap-2"
            >
              <Flag className="h-4 w-4" />
              {flagged.has(currentQuestion) ? 'Flagged' : 'Flag'}
            </Button>
          </div>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full rounded-lg border p-4 text-left transition-colors hover:bg-muted ${
                answers[currentQuestion] === index
                  ? 'border-primary bg-primary/5'
                  : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium ${
                    answers[currentQuestion] === index
                      ? 'bg-primary text-primary-foreground'
                      : 'border bg-muted'
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
          disabled={currentQuestion === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        {currentQuestion === quiz.totalQuestions - 1 ? (
          <Button onClick={handleSubmit} disabled={answeredCount < quiz.totalQuestions}>
            Submit Quiz
          </Button>
        ) : (
          <Button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
