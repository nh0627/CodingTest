package nh.java.datastructure;

import java.util.Stack;

public class myStack {

	public static void main(String args[]) {
		String text = "Hello";
		System.out.println(reverseString(text));
	}

	public static String reverseString(String str) {
		Stack<Character> theStack = new Stack<Character>();
		for (int j = 0; j < str.length(); j++) {
			char ch = str.charAt(j);
			theStack.push(ch);
		}

		String result = "";
		while (!theStack.isEmpty()) {
			char ch = theStack.pop();
			result = result + ch;
		}

		return result;
	}

}