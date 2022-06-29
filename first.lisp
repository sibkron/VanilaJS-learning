(defun divide (x y)
    (assert (not (zerop y))
            (y)
            "Second argument can not be zero.")
        (/ x y))

(divide 1 0)